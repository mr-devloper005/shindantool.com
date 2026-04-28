import { PageShell } from '@/components/shared/page-shell'
import { ShieldCheck, Eye, Lock, User, Mail, Clock, ChevronRight } from 'lucide-react'

const tone = {
  shell: 'bg-[#F9F0F2] text-[#3A0519]',
  hero: 'relative overflow-hidden border-b border-[#E5CCD3] bg-gradient-to-b from-[#FFFBFC] via-[#FDF5F6] to-[#F5E4EA]',
  panel: 'border border-[#E8CDD6] bg-white shadow-[0_24px_64px_rgba(58,5,25,0.07)]',
  soft: 'border border-[#EDD6DE] bg-[#FFF5F7]',
  muted: 'text-[#6B3D4F]',
  title: 'text-[#3A0519]',
  badge: 'bg-[#3A0519] text-[#FEF7F8]',
}

const sections = [
  {
    icon: User,
    title: 'Information We Collect',
    description: 'We collect information you provide directly, such as your name, email address, and business details when you create an account or list your business.',
    details: [
      'Account information (name, email, profile details)',
      'Business information (listings, descriptions, contact details)',
      'Usage data (pages visited, features used, session duration)',
      'Device information (browser type, operating system, IP address)',
    ],
  },
  {
    icon: Eye,
    title: 'How We Use Your Information',
    description: 'We use your information to provide, maintain, and improve our services, as well as to communicate with you about your account.',
    details: [
      'To provide and maintain our directory services',
      'To process and manage your business listings',
      'To send you important updates about your account',
      'To analyze usage patterns and improve our platform',
      'To protect against fraud and ensure platform security',
    ],
  },
  {
    icon: Lock,
    title: 'Data Security',
    description: 'We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure.',
    details: [
      'Encryption of data in transit and at rest',
      'Regular security audits and penetration testing',
      'Access controls and authentication requirements',
      'Secure data storage with reputable cloud providers',
    ],
  },
  {
    icon: Mail,
    title: 'Your Privacy Choices',
    description: 'You have control over your personal information and can make choices about how we collect and use your data.',
    details: [
      'Update or delete your account information at any time',
      'Manage email preferences and communication settings',
      'Request a copy of your personal data',
      'Delete your account and associated data permanently',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F9F0F2]">
      <PageShell
        title="Privacy Policy"
        description="How we collect, use, and protect your information."
      >
        <section className={tone.hero}>
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] ${tone.badge}`}>
                <ShieldCheck className="h-3.5 w-3.5 opacity-90" />
                Privacy Policy
              </span>
              <h1 className={`mt-6 text-4xl leading-[1.1] sm:text-5xl lg:text-6xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                Your privacy
                <span className="mt-2 block text-[#670D2F]">matters to us</span>
              </h1>
              <p className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${tone.muted}`}>
                We believe in transparency and giving you control over your personal information. This policy explains how we collect, use, and protect your data.
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
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A53860]">Privacy Overview</p>
              <h2 className={`mt-4 text-3xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                What you need to know
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <div key={section.title} className={`rounded-2xl p-6 ${tone.panel}`}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#EDD6DE] bg-[#FFF5F7] text-[#A53860]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className={`mt-4 text-lg font-semibold ${tone.title}`}>{section.title}</h3>
                    <p className={`mt-2 text-sm leading-7 ${tone.muted}`}>{section.description}</p>
                    <ul className="mt-4 space-y-2">
                      {section.details.map((detail) => (
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
                    <ShieldCheck className="h-7 w-7" />
                  </div>
                  <h2 className={`mt-6 text-3xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                    Questions about your privacy?
                  </h2>
                  <p className={`mt-4 text-sm leading-7 ${tone.muted}`}>
                    If you have questions about this policy or how we handle your data, please contact our privacy team. We're committed to addressing your concerns promptly.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${tone.badge}`}>
                    Contact Privacy Team
                  </button>
                  <button className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold border border-[#E8CDD6] bg-white text-[#3A0519] hover:bg-[#FFF0F3]`}>
                    Download Data
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
