import Link from 'next/link'
import { Bookmark, Building2, FileText, Image as ImageIcon, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { REGISTER_PAGE_OVERRIDE_ENABLED, RegisterPageOverride } from '@/overrides/register-page'

function getRegisterConfig(kind: ReturnType<typeof getProductKind>) {
  return {
    shell: 'bg-[#f8fbff] text-[#3A0519]',
    panel: 'border border-[#E8CDD6] bg-white shadow-[0_20px_60px_rgba(58,5,25,0.08)]',
    side: 'border border-[#E8CDD6] bg-[#FDF5F6]',
    muted: 'text-[#6B3D4F]',
    action: 'bg-[#A53860] text-white hover:bg-[#8E2D52]',
    icon: Building2,
    title: 'Create your Shindantool account',
    body: 'Join the business directory to list your services, connect with customers, and grow your visibility.',
  }
}

export default function RegisterPage() {
  if (REGISTER_PAGE_OVERRIDE_ENABLED) {
    return <RegisterPageOverride />
  }

  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const config = getRegisterConfig(productKind)
  const Icon = config.icon

  return (
    <div className={`min-h-screen ${config.shell}`}>
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className={`rounded-[2rem] p-8 ${config.side}`}>
            <Icon className="h-8 w-8" />
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">{config.title}</h1>
            <p className={`mt-5 text-sm leading-8 ${config.muted}`}>{config.body}</p>
            <div className="mt-8 grid gap-4">
              {['List your business in the directory', 'Get discovered by local customers', 'Track your profile visibility and engagement'].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-[#E8CDD6] px-4 py-4 text-sm text-[#6B3D4F]">{item}</div>
              ))}
            </div>
          </div>

          <div className={`rounded-[2rem] p-8 ${config.panel}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A53860]">Create account</p>
            <form className="mt-6 grid gap-4">
              <input className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm" placeholder="Full name" />
              <input className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm" placeholder="Email address" />
              <input className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm" placeholder="Password" type="password" />
              <input className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm" placeholder="What are you creating or publishing?" />
              <button type="submit" className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold ${config.action}`}>Create account</button>
            </form>
            <div className={`mt-6 flex items-center justify-between text-sm ${config.muted}`}>
              <span>Already have an account?</span>
              <Link href="/login" className="inline-flex items-center gap-2 font-semibold hover:underline">
                <Sparkles className="h-4 w-4" />
                Sign in
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
