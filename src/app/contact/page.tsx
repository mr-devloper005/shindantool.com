import { Building2, Mail, MapPin, Phone, MessageSquare, Clock, Globe } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { ContactLeadForm } from '@/components/shared/contact-lead-form'
import { CONTACT_PAGE_OVERRIDE_ENABLED, ContactPageOverride } from '@/overrides/contact-page'

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
  input: 'border border-[#E8CDD6] bg-white text-[#3A0519] placeholder:text-[#6B3D4F]/60',
}

const contactLanes = [
  {
    icon: Building2,
    title: 'Business Onboarding',
    description: 'Add your business to the directory, verify operational details, and reach local customers faster.',
  },
  {
    icon: Phone,
    title: 'Partnership Inquiries',
    description: 'Discuss bulk publishing, local growth initiatives, and strategic partnership opportunities.',
  },
  {
    icon: MapPin,
    title: 'Coverage Requests',
    description: 'Need a new geography or category? We can expand the directory to serve your community better.',
  },
]

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: process.env.CONTACT_EMAIL || 'hello@example.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
  },
]

export default function ContactPage() {
  if (CONTACT_PAGE_OVERRIDE_ENABLED) {
    return <ContactPageOverride />
  }

  return (
    <div className="min-h-screen bg-[#F9F0F2]">
      <NavbarShell />
      <main>
        <section className={tone.hero}>
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] ${tone.badge}`}>
                <MessageSquare className="h-3.5 w-3.5 opacity-90" />
                Get in Touch
              </span>
              <h1 className={`mt-6 text-4xl leading-[1.1] sm:text-5xl lg:text-6xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                Let's start a
                <span className="mt-2 block text-[#670D2F]">conversation</span>
              </h1>
              <p className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${tone.muted}`}>
                Whether you're looking to list your business, explore partnerships, or have questions about our platform, we're here to help. Reach out and we'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#FFFBFC]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A53860]">How We Can Help</p>
                <h2 className={`mt-4 text-3xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                  Choose the right path for your needs
                </h2>
                <p className={`mt-4 max-w-xl text-sm leading-7 ${tone.muted}`}>
                  We route every inquiry through the appropriate channel to ensure you get the fastest, most relevant response.
                </p>
                
                <div className="mt-8 space-y-4">
                  {contactLanes.map((lane) => {
                    const Icon = lane.icon;
                    return (
                      <div key={lane.title} className={`rounded-2xl border-l-4 border-[#A53860] p-6 ${tone.panel}`}>
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-[#EDD6DE] bg-[#FFF5F7] text-[#A53860]">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className={`text-lg font-semibold ${tone.title}`}>{lane.title}</h3>
                            <p className={`mt-2 text-sm leading-7 ${tone.muted}`}>{lane.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className={`rounded-3xl p-8 ${tone.panel}`}>
                <h2 className={`text-2xl font-semibold ${tone.title}`}>Send us a message</h2>
                <p className={`mt-2 text-sm ${tone.muted}`}>
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <ContactLeadForm
                  labelClassName={`text-xs font-semibold uppercase tracking-[0.2em] ${tone.muted}`}
                  inputClassName={`mt-2 h-12 w-full rounded-xl px-4 text-sm ${tone.input}`}
                  textareaClassName={`mt-2 min-h-[180px] w-full rounded-2xl px-4 py-3 text-sm ${tone.input}`}
                  buttonClassName={`inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold ${tone.action}`}
                  helperClassName={`text-sm ${tone.muted}`}
                  subjectOptions={[
                    'Business Onboarding',
                    'Partnership Inquiry',
                    'Coverage Request',
                    'General Question',
                    'Technical Support',
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={tone.shell}>
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A53860]">Contact Information</p>
              <h2 className={`mt-4 text-3xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                Other ways to reach us
              </h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.label} className={`rounded-2xl p-6 text-center ${tone.soft}`}>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-[#EDD6DE] bg-white text-[#A53860]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className={`mt-4 text-xs font-semibold uppercase tracking-[0.2em] ${tone.muted}`}>{info.label}</p>
                    <p className={`mt-2 text-base font-semibold ${tone.title}`}>{info.value}</p>
                    {info.label === 'Email' && (
                      <a
                        href={`mailto:${info.value}`}
                        className={`mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold ${tone.action}`}
                      >
                        <Mail className="h-3.5 w-3.5" />
                        Send Email
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#FFFBFC]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className={`rounded-3xl border border-[#E8CDD6] bg-white p-8 shadow-[0_24px_64px_rgba(58,5,25,0.07)] lg:p-12`}>
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#EDD6DE] bg-[#FFF5F7] text-[#A53860]">
                    <Globe className="h-7 w-7" />
                  </div>
                  <h2 className={`mt-6 text-3xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                    Explore our platform
                  </h2>
                  <p className={`mt-4 text-sm leading-7 ${tone.muted}`}>
                    Before reaching out, you might find what you're looking for in our directory or help center. Browse listings, read articles, or check our status page for the latest updates.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${tone.action}`}>
                    Browse Listings
                  </button>
                  <button className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${tone.actionAlt}`}>
                    Visit Help Center
                  </button>
                  <button className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${tone.actionAlt}`}>
                    Check Status
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
