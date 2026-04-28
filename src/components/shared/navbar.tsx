'use client'

import { useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Menu, X, User, FileText, Building2, LayoutGrid, Tag, Image as ImageIcon, ChevronRight, Sparkles, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import { siteContent } from '@/config/site.content'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { NAVBAR_OVERRIDE_ENABLED, NavbarOverride } from '@/overrides/navbar'

const NavbarAuthControls = dynamic(() => import('@/components/shared/navbar-auth-controls').then((mod) => mod.NavbarAuthControls), {
  ssr: false,
  loading: () => null,
})

const taskIcons: Record<TaskKey, any> = {
  article: FileText,
  listing: Building2,
  sbm: LayoutGrid,
  classified: Tag,
  image: ImageIcon,
  profile: User,
  social: LayoutGrid,
  pdf: FileText,
  org: Building2,
  comment: FileText,
}

const variantClasses = {
  'compact-bar': {
    shell: 'border-b border-slate-200/80 bg-white/88 text-slate-950 backdrop-blur-xl',
    logo: 'rounded-2xl border border-slate-200 bg-white shadow-sm',
    active: 'bg-slate-950 text-white',
    idle: 'text-slate-600 hover:bg-slate-100 hover:text-slate-950',
    cta: 'rounded-full bg-slate-950 text-white hover:bg-slate-800',
    mobile: 'border-t border-slate-200/70 bg-white/95',
  },
  'editorial-bar': {
    shell: 'border-b border-[#d7c4b3] bg-[#fff7ee]/90 text-[#2f1d16] backdrop-blur-xl',
    logo: 'rounded-full border border-[#dbc6b6] bg-white shadow-sm',
    active: 'bg-[#2f1d16] text-[#fff4e4]',
    idle: 'text-[#72594a] hover:bg-[#f2e5d4] hover:text-[#2f1d16]',
    cta: 'rounded-full bg-[#2f1d16] text-[#fff4e4] hover:bg-[#452920]',
    mobile: 'border-t border-[#dbc6b6] bg-[#fff7ee]',
  },
  'floating-bar': {
    shell: 'border-b border-transparent bg-transparent text-white',
    logo: 'rounded-[1.35rem] border border-white/12 bg-white/8 shadow-[0_16px_48px_rgba(15,23,42,0.22)] backdrop-blur',
    active: 'bg-[#8df0c8] text-[#07111f]',
    idle: 'text-slate-200 hover:bg-white/10 hover:text-white',
    cta: 'rounded-full bg-[#8df0c8] text-[#07111f] hover:bg-[#77dfb8]',
    mobile: 'border-t border-white/10 bg-[#09101d]/96',
  },
  'utility-bar': {
    shell: 'border-b border-[#d7deca] bg-[#f4f6ef]/94 text-[#1f2617] backdrop-blur-xl',
    logo: 'rounded-xl border border-[#d7deca] bg-white shadow-sm',
    active: 'bg-[#1f2617] text-[#edf5dc]',
    idle: 'text-[#56604b] hover:bg-[#e7edd9] hover:text-[#1f2617]',
    cta: 'rounded-lg bg-[#1f2617] text-[#edf5dc] hover:bg-[#2f3a24]',
    mobile: 'border-t border-[#d7deca] bg-[#f4f6ef]',
  },
} as const

const directoryPalette = {
  'directory-clean': {
    shell: 'border-b border-[#E8CDD6] bg-[#FDF5F6]/95 text-[#3A0519] shadow-[0_1px_0_rgba(58,5,25,0.05)] backdrop-blur-xl',
    logo: 'rounded-2xl border border-[#E8CDD6] bg-white shadow-sm',
    nav: 'text-[#6B3D4F] hover:text-[#3A0519]',
    search: 'border border-[#E8CDD6] bg-white text-[#6B3D4F]',
    cta: 'bg-[#A53860] text-white hover:bg-[#8E2D52]',
    post: 'border border-[#E8CDD6] bg-white text-[#3A0519] hover:bg-[#FFF5F7]',
    mobile: 'border-t border-[#E8CDD6] bg-[#FDF5F6]',
  },
  'market-utility': {
    shell: 'border-b border-[#E0C9D0] bg-[#FFFAFB]/95 text-[#3A0519] shadow-[0_1px_0_rgba(103,13,47,0.05)] backdrop-blur-xl',
    logo: 'rounded-2xl border border-[#E8CDD6] bg-white shadow-sm',
    nav: 'text-[#5c3345] hover:text-[#2b0614]',
    search: 'border border-[#E8CDD6] bg-white/95 text-[#5c3345] shadow-sm',
    cta: 'bg-[#670D2F] text-[#FEF7F8] hover:bg-[#530624]',
    post: 'border border-[#E8CDD6] bg-white text-[#2b0614] hover:bg-[#FFF0F3]',
    mobile: 'border-t border-[#E8CDD6] bg-[#FDF5F6]',
  },
} as const

export function Navbar() {
  if (NAVBAR_OVERRIDE_ENABLED) {
    return <NavbarOverride />
  }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { isAuthenticated } = useAuth()
  const { recipe } = getFactoryState()

  const navigation = useMemo(() => {
    const open = SITE_CONFIG.tasks.filter((task) => task.enabled && task.key !== 'profile')
    const secondary = open.find((task) => task.key !== recipe.primaryTask)
    if (secondary) {
      return open.filter(
        (task) => task.key === recipe.primaryTask || task.key === secondary.key,
      )
    }
    return open
  }, [recipe.primaryTask])
  const primaryNavigation = navigation
  const mobileNavigation = navigation.map((task) => ({
    name: task.label,
    href: task.route,
    icon: taskIcons[task.key] || LayoutGrid,
  }))
  const primaryTask = SITE_CONFIG.tasks.find((task) => task.key === recipe.primaryTask && task.enabled) || primaryNavigation[0]
  const isDirectoryProduct = recipe.homeLayout === 'listing-home' || recipe.homeLayout === 'classified-home'

  if (isDirectoryProduct) {
    const palette = directoryPalette[(recipe.brandPack === 'market-utility' ? 'market-utility' : 'directory-clean') as keyof typeof directoryPalette]

    return (
      <header className={cn('sticky top-0 z-50 w-full', palette.shell)}>
        <nav
          className={cn(
            'mx-auto grid w-full max-w-7xl min-w-0',
            'grid-cols-2 [grid-template-rows:auto_auto] gap-2.5 items-center',
            'px-4 py-2.5 sm:px-6',
            'lg:min-h-16 lg:max-w-7xl lg:grid-cols-[minmax(0,auto),minmax(0,1fr),auto] lg:grid-rows-1 lg:items-center lg:gap-4 lg:px-8 lg:py-0',
          )}
        >
          <div
            className={cn(
              'col-start-1 row-start-1 flex min-w-0 max-w-full items-center gap-2.5',
              'sm:gap-3',
              'lg:max-w-[28rem] lg:shrink-0',
            )}
          >
            <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
              <div
                className={cn(
                  'flex h-10 w-10 shrink-0 items-center justify-center sm:h-11 sm:w-11',
                  palette.logo,
                )}
              >
                <img
                  src="/favicon.png?v=20260424"
                  alt={`${SITE_CONFIG.name} logo`}
                  width="48"
                  height="48"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="min-w-0 hidden sm:block">
                <span
                  className="block truncate text-base font-semibold leading-tight sm:text-lg"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {SITE_CONFIG.name}
                </span>
                <span className="mt-0.5 block max-w-[14rem] truncate text-[10px] font-medium uppercase leading-none tracking-[0.18em] text-[#6B3D4F] sm:max-w-[18rem] sm:tracking-[0.2em] lg:max-w-none">
                  {siteContent.navbar.tagline}
                </span>
              </div>
            </Link>
            <div className="ml-0.5 hidden h-9 min-h-0 items-stretch gap-0.5 lg:ml-2 lg:flex">
              {primaryNavigation.map((task) => {
                const isActive = pathname.startsWith(task.route)
                return (
                  <Link
                    key={task.key}
                    href={task.route}
                    className={cn(
                      'inline-flex items-center rounded-full px-3.5 text-sm font-semibold transition-colors',
                      isActive
                        ? 'bg-[#3A0519] text-white'
                        : cn('text-[#5c3345] hover:bg-white/60', palette.nav),
                    )}
                  >
                    {task.label}
                  </Link>
                )
              })}
            </div>
          </div>

          <div
            className={cn(
              'col-span-2 row-start-2 min-w-0 w-full self-stretch',
              'lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:max-w-none',
            )}
          >
            <Link
              href="/search"
              className={cn(
                'mx-auto flex h-10 w-full min-w-0 max-w-2xl items-center gap-2.5 rounded-full pl-3 pr-2.5',
                'transition-[border-color,box-shadow] hover:border-[#A53860]/35',
                'sm:mx-0 sm:h-11',
                'lg:mx-0',
                palette.search,
              )}
            >
              <Search className="h-4 w-4 shrink-0 text-[#A53860]" aria-hidden />
              <span className="min-w-0 flex-1 truncate text-left text-sm font-medium text-[#3A0519]">
                Search businesses, cities, or categories
              </span>
              <ChevronRight className="h-4 w-4 shrink-0 text-[#A53860] opacity-60" aria-hidden />
            </Link>
          </div>

          <div
            className={cn(
              'col-start-2 row-start-1 flex h-9 items-center justify-end self-center justify-self-end',
              'sm:h-10',
              'lg:col-start-3 lg:row-start-1',
            )}
          >
            {isAuthenticated ? (
              <NavbarAuthControls />
            ) : (
              <div className="hidden h-9 min-h-0 items-center gap-1.5 md:flex lg:h-10">
                <Button variant="ghost" size="sm" asChild className="h-9 rounded-full px-3 text-sm lg:h-10 lg:px-4">
                  <Link href="/login">Sign in</Link>
                </Button>
                <Button
                  size="sm"
                  asChild
                  className={cn('h-9 rounded-full px-3 text-sm font-semibold shadow-sm lg:h-10 lg:px-4', palette.cta)}
                >
                  <Link href="/register" className="inline-flex items-center justify-center gap-1.5">
                    <Plus className="h-3.5 w-3.5" />
                    Add listing
                  </Link>
                </Button>
              </div>
            )}

            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full sm:h-10 sm:w-10 md:hidden"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div className={palette.mobile}>
            <div className="space-y-2 px-4 py-4">
              <Link
                href="/search"
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn('mb-1 flex min-h-11 w-full items-center gap-3 rounded-2xl px-4 text-sm font-medium', palette.search)}
              >
                <Search className="h-4 w-4 shrink-0" />
                <span>Search the registry</span>
              </Link>
              {mobileNavigation.map((item) => {
                const isActive = pathname.startsWith(item.href)
                return (
                  <Link key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className={cn('flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors', isActive ? 'bg-foreground text-background' : palette.post)}>
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </header>
    )
  }

  const style = variantClasses[recipe.navbar]
  const isFloating = recipe.navbar === 'floating-bar'
  const isEditorial = recipe.navbar === 'editorial-bar'
  const isUtility = recipe.navbar === 'utility-bar'

  return (
    <header className={cn('sticky top-0 z-50 w-full', style.shell)}>
      <nav className={cn('mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8', isFloating ? 'h-24 pt-4' : 'h-20')}>
        <div className="flex min-w-0 flex-1 items-center gap-4 lg:gap-7">
          <Link href="/" className="flex shrink-0 items-center gap-3 whitespace-nowrap pr-2">
            <div className={cn('flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden p-1.5', style.logo)}>
              <img src="/favicon.png?v=20260424" alt={`${SITE_CONFIG.name} logo`} width="48" height="48" className="h-full w-full object-contain" />
            </div>
            <div className="min-w-0 hidden sm:block">
              <span className="block truncate text-xl font-semibold">{SITE_CONFIG.name}</span>
              <span className="hidden text-[10px] uppercase tracking-[0.28em] opacity-70 sm:block">{siteContent.navbar.tagline}</span>
            </div>
          </Link>

          {isEditorial ? (
            <div className="hidden min-w-0 flex-1 items-center gap-4 xl:flex">
              <div className="h-px flex-1 bg-[#d8c8bb]" />
              {primaryNavigation.map((task) => {
                const isActive = pathname.startsWith(task.route)
                return (
                  <Link key={task.key} href={task.route} className={cn('text-sm font-semibold uppercase tracking-[0.18em] transition-colors', isActive ? 'text-[#2f1d16]' : 'text-[#7b6254] hover:text-[#2f1d16]')}>
                    {task.label}
                  </Link>
                )
              })}
              <div className="h-px flex-1 bg-[#d8c8bb]" />
            </div>
          ) : isFloating ? (
            <div className="hidden min-w-0 flex-1 items-center gap-2 xl:flex">
              {primaryNavigation.map((task) => {
                const Icon = taskIcons[task.key] || LayoutGrid
                const isActive = pathname.startsWith(task.route)
                return (
                  <Link key={task.key} href={task.route} className={cn('flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors', isActive ? style.active : style.idle)}>
                    <Icon className="h-4 w-4" />
                    <span>{task.label}</span>
                  </Link>
                )
              })}
            </div>
          ) : isUtility ? (
            <div className="hidden min-w-0 flex-1 items-center gap-2 xl:flex">
              {primaryNavigation.map((task) => {
                const isActive = pathname.startsWith(task.route)
                return (
                  <Link key={task.key} href={task.route} className={cn('rounded-lg px-3 py-2 text-sm font-semibold transition-colors', isActive ? style.active : style.idle)}>
                    {task.label}
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className="hidden min-w-0 flex-1 items-center gap-1 overflow-hidden xl:flex">
              {primaryNavigation.map((task) => {
                const Icon = taskIcons[task.key] || LayoutGrid
                const isActive = pathname.startsWith(task.route)
                return (
                  <Link key={task.key} href={task.route} className={cn('flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition-colors whitespace-nowrap', isActive ? style.active : style.idle)}>
                    <Icon className="h-4 w-4" />
                    <span>{task.label}</span>
                  </Link>
                )
              })}
            </div>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {primaryTask && (recipe.navbar === 'utility-bar' || recipe.navbar === 'floating-bar') ? (
            <Link href={primaryTask.route} className="hidden items-center gap-2 rounded-full border border-current/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] opacity-80 md:inline-flex">
              <Sparkles className="h-3.5 w-3.5" />
              {primaryTask.label}
            </Link>
          ) : null}

          <Button variant="ghost" size="icon" asChild className="hidden rounded-full md:flex">
            <Link href="/search">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Link>
          </Button>

          {isAuthenticated ? (
            <NavbarAuthControls />
          ) : (
            <div className="hidden items-center gap-2 md:flex">
              <Button variant="ghost" size="sm" asChild className="rounded-full px-4">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button size="sm" asChild className={style.cta}>
                <Link href="/register">{isEditorial ? 'Subscribe' : isUtility ? 'Post Now' : 'Get Started'}</Link>
              </Button>
            </div>
          )}

          <Button variant="ghost" size="icon" className="rounded-full lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {isFloating && primaryTask ? (
        <div className="mx-auto hidden max-w-7xl px-4 pb-3 sm:px-6 lg:block lg:px-8">
          <Link href={primaryTask.route} className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200 backdrop-blur hover:bg-white/12">
            Featured surface
            <span>{primaryTask.label}</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      ) : null}

      {isMobileMenuOpen && (
        <div className={style.mobile}>
          <div className="space-y-2 px-4 py-4">
            <Link href="/search" onClick={() => setIsMobileMenuOpen(false)} className="mb-3 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-semibold text-muted-foreground">
              <Search className="h-4 w-4" />
              Search the site
            </Link>
            {mobileNavigation.map((item) => {
              const isActive = pathname.startsWith(item.href)
              return (
                <Link key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className={cn('flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors', isActive ? style.active : style.idle)}>
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
