'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Bookmark, Building2, FileText, Image as ImageIcon, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { LOGIN_PAGE_OVERRIDE_ENABLED, LoginPageOverride } from '@/overrides/login-page'
import { useAuth } from '@/lib/auth-context'

function getLoginConfig(kind: ReturnType<typeof getProductKind>) {
  return {
    shell: 'bg-[#f8fbff] text-[#3A0519]',
    panel: 'border border-[#E8CDD6] bg-white shadow-[0_20px_60px_rgba(58,5,25,0.08)]',
    side: 'border border-[#E8CDD6] bg-[#FDF5F6]',
    muted: 'text-[#6B3D4F]',
    action: 'bg-[#A53860] text-white hover:bg-[#8E2D52]',
    icon: Building2,
    title: 'Access your Shindantool dashboard',
    body: 'Manage your business listings, verify your profile, and connect with customers in the Shindantool directory.',
  }
}

export default function LoginPage() {
  if (LOGIN_PAGE_OVERRIDE_ENABLED) {
    return <LoginPageOverride />
  }

  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const config = getLoginConfig(productKind)
  const Icon = config.icon
  const { login, isLoading } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    await login(email, password)
    router.push('/')
  }

  return (
    <div className={`min-h-screen ${config.shell}`}>
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
          <div className={`rounded-[2rem] p-8 ${config.side}`}>
            <Icon className="h-8 w-8" />
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">{config.title}</h1>
            <p className={`mt-5 text-sm leading-8 ${config.muted}`}>{config.body}</p>
            <div className="mt-8 grid gap-4">
              {['Manage business listings and profiles', 'Track views and engagement metrics', 'Update contact information and hours'].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-[#E8CDD6] px-4 py-4 text-sm text-[#6B3D4F]">{item}</div>
              ))}
            </div>
          </div>

          <div className={`rounded-[2rem] p-8 ${config.panel}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A53860]">Welcome back</p>
            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <input name="email" className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm" placeholder="Email address" required />
              <input name="password" className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm" placeholder="Password" type="password" required />
              <button type="submit" disabled={isLoading} className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold ${config.action} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                {isLoading ? 'Signing in...' : 'Sign in'}
              </button>
            </form>
            <div className={`mt-6 flex items-center justify-between text-sm ${config.muted}`}>
              <Link href="/forgot-password" className="hover:underline">Forgot password?</Link>
              <Link href="/register" className="inline-flex items-center gap-2 font-semibold hover:underline">
                <Sparkles className="h-4 w-4" />
                Create account
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
