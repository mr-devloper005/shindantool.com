import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Button } from '@/components/ui/button'
import { Code, GitBranch, Database, Globe, Zap, ArrowRight, FileCode, Terminal, Layers } from 'lucide-react'

const tone = {
  shell: 'bg-[#F9F0F2] text-[#3A0519]',
  hero: 'relative overflow-hidden border-b border-[#E5CCD3] bg-gradient-to-b from-[#FFFBFC] via-[#FDF5F6] to-[#F5E4EA]',
  panel: 'border border-[#E8CDD6] bg-white shadow-[0_24px_64px_rgba(58,5,25,0.07)]',
  soft: 'border border-[#EDD6DE] bg-[#FFF5F7]',
  muted: 'text-[#6B3D4F]',
  title: 'text-[#3A0519]',
  badge: 'bg-[#3A0519] text-[#FEF7F8]',
  action: 'bg-[#A53860] text-white shadow-sm hover:bg-[#8E2D52]',
  actionAlt: 'border border-[#E8CDD6] bg-white text-[#3A0519] hover:bg-[#FFF0F3]',
}

const resources = [
  {
    icon: FileCode,
    title: 'API Documentation',
    description: 'Comprehensive API reference with endpoints, authentication, and code examples.',
    link: '#api',
  },
  {
    icon: Terminal,
    title: 'SDKs & Libraries',
    description: 'Official SDKs for popular programming languages and frameworks.',
    link: '#sdks',
  },
  {
    icon: Database,
    title: 'Data Integration',
    description: 'Webhooks, bulk exports, and real-time data synchronization options.',
    link: '#data',
  },
  {
    icon: Layers,
    title: 'Platform Architecture',
    description: 'Deep dive into our system design, scalability, and infrastructure.',
    link: '#architecture',
  },
]

const features = [
  {
    title: 'RESTful API',
    description: 'Build powerful integrations with our well-documented REST API supporting JSON responses and standard HTTP methods.',
  },
  {
    title: 'Webhook Support',
    description: 'Receive real-time notifications for events like new listings, updates, and user actions.',
  },
  {
    title: 'OAuth 2.0',
    description: 'Secure authentication flow for third-party applications with granular permission scopes.',
  },
  {
    title: 'Rate Limiting',
    description: 'Fair usage policies with transparent rate limits and burst allowances for production applications.',
  },
]

const gettingStarted = [
  {
    step: '1',
    title: 'Get API Keys',
    description: 'Sign up for a developer account and generate your API credentials from the dashboard.',
  },
  {
    step: '2',
    title: 'Read the Docs',
    description: 'Explore our comprehensive documentation to understand available endpoints and best practices.',
  },
  {
    step: '3',
    title: 'Build & Test',
    description: 'Use our sandbox environment to test your integrations before going to production.',
  },
  {
    step: '4',
    title: 'Deploy',
    description: 'Launch your integration and monitor performance through our developer dashboard.',
  },
]

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-[#F9F0F2]">
      <PageShell
        title="Developers"
        description="Build integrations, access APIs, and extend our platform."
        actions={
          <Button className={tone.action} asChild>
            <Link href="#api">View API Docs</Link>
          </Button>
        }
      >
        <section className={tone.hero}>
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] ${tone.badge}`}>
                <Code className="h-3.5 w-3.5 opacity-90" />
                Developer Portal
              </span>
              <h1 className={`mt-6 text-4xl leading-[1.1] sm:text-5xl lg:text-6xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                Build with our
                <span className="mt-2 block text-[#670D2F]">platform APIs</span>
              </h1>
              <p className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${tone.muted}`}>
                Access our comprehensive API suite, integrate with our directory, and build powerful applications on top of our platform. From simple data exports to complex real-time integrations.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button className={tone.action} asChild>
                <Link href="#api">Get API Keys</Link>
              </Button>
              <Button variant="outline" className={tone.actionAlt} asChild>
                <Link href="#docs">Read Documentation</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-[#FFFBFC]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A53860]">Developer Resources</p>
              <h2 className={`mt-4 text-3xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                Everything you need to build
              </h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {resources.map((resource) => {
                const Icon = resource.icon;
                return (
                  <Link key={resource.title} href={resource.link} className={`group block rounded-2xl border border-[#E8CDD6] bg-white p-6 transition hover:-translate-y-1 hover:border-[#A53860]/50 hover:shadow-[0_20px_60px_rgba(58,5,25,0.1)]`}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#EDD6DE] bg-[#FFF5F7] text-[#A53860] transition group-hover:bg-[#A53860] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className={`mt-4 text-lg font-semibold ${tone.title}`}>{resource.title}</h3>
                    <p className={`mt-2 text-sm leading-7 ${tone.muted}`}>{resource.description}</p>
                    <div className={`mt-4 flex items-center gap-2 text-sm font-semibold text-[#A53860] group-hover:text-[#670D2F]`}>
                      Explore
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className={tone.shell}>
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A53860]">Platform Features</p>
                <h2 className={`mt-4 text-3xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                  Built for developers
                </h2>
                <p className={`mt-4 max-w-xl text-sm leading-7 ${tone.muted}`}>
                  Our platform provides the tools and infrastructure you need to build robust integrations quickly and reliably.
                </p>
              </div>
              <div className="space-y-4">
                {features.map((feature) => (
                  <div key={feature.title} className={`rounded-2xl border-l-4 border-[#A53860] p-6 ${tone.panel}`}>
                    <h3 className={`text-lg font-semibold ${tone.title}`}>{feature.title}</h3>
                    <p className={`mt-2 text-sm leading-7 ${tone.muted}`}>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FFFBFC]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A53860]">Getting Started</p>
              <h2 className={`mt-4 text-3xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                Build your first integration in minutes
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {gettingStarted.map((step) => (
                <div key={step.step} className={`rounded-2xl p-6 ${tone.panel}`}>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-[#A53860] text-white font-bold text-lg`}>
                    {step.step}
                  </div>
                  <h3 className={`mt-4 text-lg font-semibold ${tone.title}`}>{step.title}</h3>
                  <p className={`mt-2 text-sm leading-7 ${tone.muted}`}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={tone.shell}>
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className={`rounded-3xl border border-[#E8CDD6] bg-white p-8 shadow-[0_24px_64px_rgba(58,5,25,0.07)] lg:p-12`}>
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#EDD6DE] bg-[#FFF5F7] text-[#A53860]">
                    <Zap className="h-7 w-7" />
                  </div>
                  <h2 className={`mt-6 text-3xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                    Ready to start building?
                  </h2>
                  <p className={`mt-4 text-sm leading-7 ${tone.muted}`}>
                    Join thousands of developers building on our platform. Get your API keys and start integrating today.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button className={tone.action} asChild>
                    <Link href="#api">Get API Keys</Link>
                  </Button>
                  <Button variant="outline" className={tone.actionAlt} asChild>
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageShell>
    </div>
  )
}
