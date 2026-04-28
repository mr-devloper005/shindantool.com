import { ContentImage } from '@/components/shared/content-image'
import Link from 'next/link'
import { ArrowUpRight, ExternalLink, FileText, Mail, MapPin, Tag } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'
import type { TaskKey } from '@/lib/site-config'
import { SITE_THEME } from '@/config/site.theme'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { TASK_POST_CARD_OVERRIDE_ENABLED, TaskPostCardOverride } from '@/overrides/task-post-card'

type ListingContent = {
  location?: string
  category?: string
  description?: string
  email?: string
}

const stripHtml = (value?: string | null) =>
  (value || '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<\/?[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const getExcerpt = (value?: string | null, maxLength = 140) => {
  const text = stripHtml(value)
  if (!text) return ''
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength).trimEnd()}…`
}

const getContent = (post: SitePost): ListingContent => {
  const content = post.content && typeof post.content === 'object' ? post.content : {}
  return content as ListingContent
}

const getImageUrl = (post: SitePost, content: ListingContent) => {
  const media = Array.isArray(post.media) ? post.media : []
  const mediaUrl = media[0]?.url
  if (mediaUrl) return mediaUrl

  const contentAny = content as Record<string, unknown>
  const contentImage = typeof contentAny.image === 'string' ? contentAny.image : null
  if (contentImage) return contentImage

  const contentImages = Array.isArray(contentAny.images) ? contentAny.images : []
  const firstImage = contentImages.find((value) => typeof value === 'string')
  if (firstImage) return firstImage as string

  const contentLogo = typeof contentAny.logo === 'string' ? contentAny.logo : null
  if (contentLogo) return contentLogo

  return '/placeholder.svg?height=640&width=960'
}

const cardStyles = {
  'listing-elevated': {
    frame: 'rounded-[1.9rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(15,23,42,0.14)]',
    muted: 'text-slate-600',
    title: 'text-slate-950',
    badge: 'bg-slate-950 text-white',
  },
  'editorial-feature': {
    frame: 'rounded-[1.8rem] border border-[rgba(125,83,45,0.12)] bg-[#fffaf3] shadow-[0_18px_55px_rgba(89,52,24,0.1)] hover:-translate-y-1 hover:shadow-[0_26px_75px_rgba(89,52,24,0.14)]',
    muted: 'text-[#71584b]',
    title: 'text-[#2b1d17]',
    badge: 'bg-[#2b1d17] text-[#fff3df]',
  },
  'studio-panel': {
    frame: 'rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(7,17,31,0.96),rgba(12,23,43,0.96))] text-white shadow-[0_24px_80px_rgba(15,23,42,0.35)] hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,23,42,0.42)]',
    muted: 'text-slate-300',
    title: 'text-white',
    badge: 'bg-[#8df0c8] text-[#07111f]',
  },
  'catalog-grid': {
    frame: 'rounded-[1.8rem] border border-[rgba(67,78,41,0.14)] bg-[#f8faf1] shadow-[0_18px_58px_rgba(55,65,31,0.1)] hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(55,65,31,0.14)]',
    muted: 'text-[#5b664c]',
    title: 'text-[#1f2617]',
    badge: 'bg-[#1f2617] text-[#edf5dc]',
  },
} as const

const getVariantForTask = (taskKey: TaskKey) => SITE_THEME.cards[taskKey] || 'listing-elevated'

export function TaskPostCard({
  post,
  href,
  taskKey,
  compact,
}: {
  post: SitePost
  href: string
  taskKey?: TaskKey
  compact?: boolean
}) {
  if (TASK_POST_CARD_OVERRIDE_ENABLED) {
    return <TaskPostCardOverride post={post} href={href} taskKey={taskKey} compact={compact} />
  }

  const content = getContent(post)
  const image = getImageUrl(post, content)
  const rawCategory = content.category || post.tags?.[0] || 'Post'
  const normalizedCategory = normalizeCategory(rawCategory)
  const category = CATEGORY_OPTIONS.find((item) => item.slug === normalizedCategory)?.name || rawCategory
  const variant = taskKey || 'listing'
  const visualVariant = cardStyles[getVariantForTask(variant)]
  const isBookmarkVariant = variant === 'sbm' || variant === 'social'
  const imageAspect = variant === 'image' ? 'aspect-[4/5]' : variant === 'article' ? 'aspect-[16/10]' : variant === 'pdf' ? 'aspect-[4/5]' : variant === 'classified' ? 'aspect-[16/11]' : 'aspect-[4/3]'
  const altText = `${post.title} ${category} ${variant === 'listing' ? 'business listing' : variant} image`
  const imageSizes = variant === 'article' ? '(max-width: 640px) 90vw, (max-width: 1024px) 48vw, 420px' : variant === 'image' ? '(max-width: 640px) 82vw, (max-width: 1024px) 34vw, 320px' : '(max-width: 640px) 85vw, (max-width: 1024px) 42vw, 340px'

  const { recipe } = getFactoryState()
  const isDirectoryProduct = recipe.homeLayout === 'listing-home' || recipe.homeLayout === 'classified-home'
  const isDirectorySurface = isDirectoryProduct && (variant === 'listing' || variant === 'classified' || variant === 'profile')

  if (isDirectorySurface) {
    const cardTone = {
      frame:
        'group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-[#E8CDD6] bg-white shadow-[0_8px_30px_rgba(58,5,25,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#A53860]/50 hover:shadow-[0_20px_60px_rgba(103,13,47,0.15)] sm:flex-row',
      imageContainer: 'relative order-1 h-48 w-full flex-shrink-0 overflow-hidden sm:order-2 sm:h-auto sm:w-56 sm:border-l sm:border-[#EDD6DE]',
      content: 'order-2 flex min-w-0 flex-1 flex-col p-5 sm:order-1 sm:py-6 sm:pl-6 sm:pr-5',
      badge: 'inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#3A0519] to-[#670D2F] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-sm',
      badgeSecondary: 'rounded-full bg-[#FFF5F7] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A53860] border border-[#E8CDD6]',
      tag: 'text-[#A53860]',
      muted: 'text-[#6B3D4F]',
      title: 'text-[#3A0519]',
      cta: 'inline-flex items-center gap-2 rounded-full bg-[#FFF5F7] px-4 py-2 text-sm font-semibold text-[#A53860] transition-all duration-300 group-hover:bg-[#A53860] group-hover:text-white',
      iconContainer: 'flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF5F7] text-[#A53860] transition-all duration-300 group-hover:bg-[#A53860] group-hover:text-white',
    }

    return (
      <Link href={href} className={cardTone.frame}>
        <div className={cardTone.imageContainer}>
          <ContentImage
            src={image}
            alt={altText}
            fill
            sizes="(max-width:640px) 100vw, 224px"
            quality={75}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            intrinsicWidth={640}
            intrinsicHeight={480}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#A53860] shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#A53860] group-hover:text-white">
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>
        
        <div className={cardTone.content}>
          <div className="flex flex-wrap items-center gap-2">
            <span className={cardTone.badge}>
              <Tag className="h-3 w-3" />
              {category}
            </span>
            <span className={cardTone.badgeSecondary}>
              {variant === 'classified' ? 'Notice' : 'Verified'}
            </span>
          </div>
          
          <h3
            className={`mt-4 line-clamp-2 text-xl font-semibold leading-tight sm:text-2xl ${cardTone.title}`}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {post.title}
          </h3>
          
          <p className={`mt-3 line-clamp-2 text-sm leading-relaxed ${cardTone.muted}`}>
            {getExcerpt(content.description || post.summary, 120) || 'Details on file for this business.'}
          </p>
          
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
            {content.location ? (
              <span className={`inline-flex items-center gap-1.5 rounded-full bg-[#FFF5F7] px-3 py-1.5 font-medium ${cardTone.muted}`}>
                <MapPin className="h-3.5 w-3.5 text-[#A53860]" />
                {content.location}
              </span>
            ) : null}
            {content.email ? (
              <span className={`inline-flex min-w-0 max-w-[200px] items-center gap-1.5 truncate rounded-full bg-[#FFF5F7] px-3 py-1.5 ${cardTone.muted}`}>
                <Mail className="h-3.5 w-3.5 shrink-0 text-[#A53860]" />
                {content.email}
              </span>
            ) : null}
          </div>
          
          <div className="mt-auto pt-5">
            <span className={cardTone.cta}>
              {variant === 'classified' ? 'View notice' : 'View listing'}
            </span>
          </div>
        </div>
      </Link>
    )
  }

  if (isBookmarkVariant) {
    return (
      <Link href={href} className={`group flex h-full flex-row items-start gap-4 overflow-hidden p-5 transition duration-300 ${visualVariant.frame}`}>
        <div className="mt-1 rounded-full bg-white/10 p-2.5 text-current transition group-hover:scale-105">
          <ExternalLink className="h-4 w-4" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${visualVariant.badge}`}>
              <Tag className="h-3.5 w-3.5" />
              {category}
            </span>
            {content.location ? <span className={`inline-flex items-center gap-1 text-xs ${visualVariant.muted}`}><MapPin className="h-3.5 w-3.5" />{content.location}</span> : null}
          </div>
          <h3 className={`mt-3 line-clamp-2 text-lg font-semibold leading-snug group-hover:opacity-85 ${visualVariant.title}`}>{post.title}</h3>
          <p className={`mt-2 line-clamp-3 text-sm leading-7 ${visualVariant.muted}`}>{getExcerpt(content.description || post.summary, compact ? 120 : 180) || 'Explore this bookmark.'}</p>
          {content.email ? <div className={`mt-3 inline-flex items-center gap-1 text-xs ${visualVariant.muted}`}><Mail className="h-3.5 w-3.5" />{content.email}</div> : null}
        </div>
      </Link>
    )
  }

  return (
    <Link href={href} className={`group flex h-full flex-col overflow-hidden transition duration-300 ${visualVariant.frame}`}>
      <div className={`relative ${imageAspect} overflow-hidden bg-[#ede2dc]`}>
        <ContentImage src={image} alt={altText} fill sizes={imageSizes} quality={75} className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" intrinsicWidth={960} intrinsicHeight={720} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-80" />
        <span className={`absolute left-4 top-4 inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${visualVariant.badge}`}>
          <Tag className="h-3.5 w-3.5" />
          {category}
        </span>
        {variant === 'pdf' && <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/88 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-950 shadow"><FileText className="h-3.5 w-3.5" />PDF</span>}
      </div>
      <div className={`flex flex-1 flex-col p-5 ${compact ? 'py-4' : ''}`}>
        <h3 className={`line-clamp-2 font-semibold leading-snug ${variant === 'article' ? 'text-[1.35rem]' : 'text-lg'} ${visualVariant.title}`}>{post.title}</h3>
        <p className={`mt-3 text-sm leading-7 ${variant === 'article' ? 'line-clamp-4' : 'line-clamp-3'} ${visualVariant.muted}`}>{getExcerpt(content.description || post.summary) || 'Explore this post.'}</p>
        <div className="mt-auto pt-4">
          {content.location && <div className={`inline-flex items-center gap-1 text-xs ${visualVariant.muted}`}><MapPin className="h-3.5 w-3.5" />{content.location}</div>}
          {content.email && <div className={`mt-2 inline-flex items-center gap-1 text-xs ${visualVariant.muted}`}><Mail className="h-3.5 w-3.5" />{content.email}</div>}
        </div>
      </div>
    </Link>
  )
}
