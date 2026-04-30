import Link from 'next/link'
import { ArrowRight, Globe, Mail, MapPin, Phone, ShieldCheck, Tag } from 'lucide-react'
import { ContentImage } from '@/components/shared/content-image'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { TaskPostCard } from '@/components/shared/task-post-card'
import { RichContent, formatRichHtml } from '@/components/shared/rich-content'
import type { SitePost } from '@/lib/site-connector'
import type { TaskKey } from '@/lib/site-config'

export function DirectoryTaskDetailPage({
  task,
  taskLabel,
  taskRoute,
  post,
  description,
  category,
  images,
  mapEmbedUrl,
  related,
}: {
  task: TaskKey
  taskLabel: string
  taskRoute: string
  post: SitePost
  description: string
  category: string
  images: string[]
  mapEmbedUrl: string | null
  related: SitePost[]
}) {
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const location = typeof content.address === 'string' ? content.address : typeof content.location === 'string' ? content.location : ''
  const website = typeof content.website === 'string' ? content.website : ''
  const phone = typeof content.phone === 'string' ? content.phone : ''
  const email = typeof content.email === 'string' ? content.email : ''
  const highlights = Array.isArray(content.highlights) ? content.highlights.filter((item): item is string => typeof item === 'string') : []
  const stripHtml = (value: string) => value.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
  const schemaPayload = {
    '@context': 'https://schema.org',
    '@type': task === 'profile' ? 'Organization' : 'LocalBusiness',
    name: post.title,
    description,
    image: images[0],
    url: `${taskRoute}/${post.slug}`,
    address: location || undefined,
    telephone: phone || undefined,
    email: email || undefined,
  }

  return (
    <div className="min-h-screen bg-[#FDF5F6] text-[#3A0519]">
      <SchemaJsonLd data={schemaPayload} />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <Link
          href={taskRoute}
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#6B3D4F] hover:text-[#3A0519]"
        >
          ← Back to {taskLabel}
        </Link>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.75fr] lg:items-start">
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#E8CDD6] bg-white p-6 shadow-[0_20px_60px_rgba(58,5,25,0.07)] sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A53860]">{category || taskLabel}</p>
                  <h1
                    className="mt-2 text-3xl leading-tight sm:text-4xl"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {post.title}
                  </h1>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#3A0519] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FEF7F8]">
                  <ShieldCheck className="h-3.5 w-3.5" /> On file
                </span>
              </div>
              <p className="mt-4 text-sm text-[#6B3D4F]">Primary facts — use these before scrolling to photography.</p>

              <div className="mt-6 grid gap-2 sm:max-w-lg">
                {location ? (
                  <div className="flex items-start gap-3 rounded-2xl border border-[#EDD6DE] bg-[#FFF5F7] px-4 py-3 text-sm text-[#3A0519]">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#A53860]" />
                    <span className="leading-relaxed">{location}</span>
                  </div>
                ) : null}
                {phone ? (
                  <div className="flex items-center gap-3 rounded-2xl border border-[#EDD6DE] bg-white px-4 py-3 text-sm text-[#3A0519]">
                    <Phone className="h-4 w-4 text-[#A53860]" />
                    {phone}
                  </div>
                ) : null}
                {email ? (
                  <div className="flex items-center gap-3 rounded-2xl border border-[#EDD6DE] bg-white px-4 py-3 text-sm text-[#3A0519]">
                    <Mail className="h-4 w-4 text-[#A53860]" />
                    {email}
                  </div>
                ) : null}
                {website ? (
                  <div className="flex min-w-0 items-center gap-3 rounded-2xl border border-[#EDD6DE] bg-white px-4 py-3 text-sm text-[#3A0519]">
                    <Globe className="h-4 w-4 shrink-0 text-[#A53860]" />
                    <span className="min-w-0 truncate">{website}</span>
                  </div>
                ) : null}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {website ? (
                  <a
                    href={website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-[#A53860] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#8E2D52]"
                  >
                    Open website
                    <ArrowRight className="h-4 w-4" />
                  </a>
                ) : null}
                <Link
                  href={taskRoute}
                  className="inline-flex items-center gap-2 rounded-2xl border border-[#E8CDD6] bg-white px-5 py-3 text-sm font-semibold text-[#3A0519] hover:bg-[#FFF5F7]"
                >
                  More in this category
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-[#E8CDD6] bg-white p-6 shadow-[0_18px_50px_rgba(58,5,25,0.05)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6B3D4F]">About this listing</p>
              <h2
                className="mt-3 text-2xl text-[#3A0519] sm:text-3xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Service detail & scope
              </h2>
              <RichContent html={formatRichHtml(description, "Details coming soon.")} className="mt-4 text-sm leading-8 text-[#6B3D4F]" />
              {highlights.length ? (
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {highlights.slice(0, 4).map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#E8CDD6] bg-[#FFF5F7] px-4 py-3 text-sm text-[#3A0519]"
                    >
                      {stripHtml(item)}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          <div className="space-y-5">
            <div className="overflow-hidden rounded-3xl border border-[#E8CDD6] bg-white shadow-[0_18px_48px_rgba(58,5,25,0.06)]">
              <p className="border-b border-[#EDD6DE] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#6B3D4F]">
                Reference image
              </p>
              <div className="relative h-56 w-full overflow-hidden bg-[#F5E0E6]">
                <ContentImage src={images[0]} alt={post.title} fill className="object-cover" />
              </div>
              {images.length > 1 ? (
                <div className="grid grid-cols-4 gap-2 p-3">
                  {images.slice(1, 5).map((image) => (
                    <div
                      key={image}
                      className="relative h-16 overflow-hidden rounded-xl border border-[#E8CDD6] bg-[#F9F0F2]"
                    >
                      <ContentImage src={image} alt={post.title} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            {mapEmbedUrl ? (
              <div className="overflow-hidden rounded-3xl border border-[#E8CDD6] bg-white shadow-[0_18px_40px_rgba(58,5,25,0.06)]">
                <div className="border-b border-[#E8CDD6] px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6B3D4F]">Map & area</p>
                </div>
                <iframe
                  src={mapEmbedUrl}
                  title={`${post.title} map`}
                  className="h-[300px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            ) : null}

            <div className="rounded-3xl border border-[#E8CDD6] bg-white p-5 shadow-[0_12px_36px_rgba(58,5,25,0.04)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6B3D4F]">Trust cues</p>
              <ul className="mt-3 space-y-2 text-sm text-[#3A0519]">
                <li className="border-l-2 border-[#EF88AD] pl-3">Listing fields reviewed for contact clarity.</li>
                <li className="border-l-2 border-[#A53860] pl-3">Category and service context shown before imagery.</li>
                <li className="border-l-2 border-[#670D2F]/40 pl-3">Related results load from the same directory logic.</li>
              </ul>
            </div>
          </div>
        </section>

        {related.length ? (
          <section className="mt-16 border-t border-[#E8CDD6] pt-12">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A53860]">Directory matches</p>
                <h2
                  className="mt-2 text-2xl sm:text-3xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  More businesses in the same flow
                </h2>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#E8CDD6] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#6B3D4F]">
                <Tag className="h-3.5 w-3.5" />
                {taskLabel}
              </span>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <TaskPostCard
                  key={item.id}
                  post={item}
                  href={`${taskRoute}/${item.slug}`}
                  taskKey={task}
                />
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </div>
  )
}
