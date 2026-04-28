import { PageShell } from '@/components/shared/page-shell'
import { Cookie, ShieldCheck, BarChart3, Settings, Clock, ChevronRight, CheckCircle } from 'lucide-react'

const tone = {
  shell: 'bg-[#F9F0F2] text-[#3A0519]',
  hero: 'relative overflow-hidden border-b border-[#E5CCD3] bg-gradient-to-b from-[#FFFBFC] via-[#FDF5F6] to-[#F5E4EA]',
  panel: 'border border-[#E8CDD6] bg-white shadow-[0_24px_64px_rgba(58,5,25,0.07)]',
  soft: 'border border-[#EDD6DE] bg-[#FFF5F7]',
  muted: 'text-[#6B3D4F]',
  title: 'text-[#3A0519]',
  badge: 'bg-[#3A0519] text-[#FEF7F8]',
}

const cookieTypes = [
  {
    icon: ShieldCheck,
    title: 'Essential Cookies',
    description: 'These cookies are necessary for the platform to function properly. They enable core functionality such as authentication and security.',
    details: [
      'Session management and authentication',
      'Security tokens and CSRF protection',
      'Basic platform functionality',
      'Cannot be disabled',
    ],
    required: true,
  },
  {
    icon: BarChart3,
    title: 'Analytics Cookies',
    description: 'These cookies help us understand how visitors interact with our platform by collecting anonymous usage data.',
    details: [
      'Page views and session duration',
      'User flow and navigation patterns',
      'Device and browser information',
      'Anonymous and aggregated data only',
    ],
    required: false,
  },
  {
    icon: Settings,
    title: 'Preference Cookies',
    description: 'These cookies remember your settings and preferences to provide a more personalized experience.',
    details: [
      'Language and region settings',
      'Saved filters and search preferences',
      'Theme and display preferences',
      'Remember login state',
    ],
    required: false,
  },
]

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[#F9F0F2]">
      <PageShell
        title="Cookie Policy"
        description="Details about the cookies we use."
      >
        <section className={tone.hero}>
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] ${tone.badge}`}>
                <Cookie className="h-3.5 w-3.5 opacity-90" />
                Cookie Policy
              </span>
              <h1 className={`mt-6 text-4xl leading-[1.1] sm:text-5xl lg:text-6xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                How we use
                <span className="mt-2 block text-[#670D2F]">cookies</span>
              </h1>
              <p className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${tone.muted}`}>
                We use cookies to enhance your experience, analyze platform usage, and assist in our marketing efforts. Learn about the types of cookies we use and how you can control them.
              </p>
              <div className={`mt-4 flex items-center gap-2 text-sm ${tone.muted}`}>
                <Clock className="h-4 w-4" />
                Last updated: March 16, 2026
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FFFBFC]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A53860]">Cookie Types</p>
              <h2 className={`mt-4 text-3xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                Cookies we use
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {cookieTypes.map((cookie) => {
                const Icon = cookie.icon;
                return (
                  <div key={cookie.title} className={`rounded-2xl p-6 ${tone.panel}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#EDD6DE] bg-[#FFF5F7] text-[#A53860]">
                        <Icon className="h-6 w-6" />
                      </div>
                      {cookie.required && (
                        <span className={`inline-flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700`}>
                          <CheckCircle className="h-3 w-3" />
                          Required
                        </span>
                      )}
                    </div>
                    <h3 className={`mt-4 text-lg font-semibold ${tone.title}`}>{cookie.title}</h3>
                    <p className={`mt-2 text-sm leading-7 ${tone.muted}`}>{cookie.description}</p>
                    <ul className="mt-4 space-y-2">
                      {cookie.details.map((detail) => (
                        <li key={detail} className={`flex items-start gap-2 text-sm ${tone.muted}`}>
                          <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#A53860]" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className={tone.shell}>
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className={`rounded-3xl border border-[#E8CDD6] bg-white p-8 shadow-[0_24px_64px_rgba(58,5,25,0.07)] lg:p-12`}>
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#EDD6DE] bg-[#FFF5F7] text-[#A53860]">
                    <Cookie className="h-7 w-7" />
                  </div>
                  <h2 className={`mt-6 text-3xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                    Managing your cookies
                  </h2>
                  <p className={`mt-4 text-sm leading-7 ${tone.muted}`}>
                    You can control and manage cookies in various ways. Please note that removing or blocking cookies may impact your user experience and parts of our platform may no longer be fully accessible.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${tone.badge}`}>
                    Update Preferences
                  </button>
                  <button className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold border border-[#E8CDD6] bg-white text-[#3A0519] hover:bg-[#FFF0F3]`}>
                    View Privacy Policy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageShell>
    </div>
  )
}
