import { PageShell } from '@/components/shared/page-shell'
import { FileText, Heart, ExternalLink, Code, Layers, Zap, Globe, Clock } from 'lucide-react'

const tone = {
  shell: 'bg-[#F9F0F2] text-[#3A0519]',
  hero: 'relative overflow-hidden border-b border-[#E5CCD3] bg-gradient-to-b from-[#FFFBFC] via-[#FDF5F6] to-[#F5E4EA]',
  panel: 'border border-[#E8CDD6] bg-white shadow-[0_24px_64px_rgba(58,5,25,0.07)]',
  soft: 'border border-[#EDD6DE] bg-[#FFF5F7]',
  muted: 'text-[#6B3D4F]',
  title: 'text-[#3A0519]',
  badge: 'bg-[#3A0519] text-[#FEF7F8]',
}

const licenses = [
  {
    name: 'Next.js',
    description: 'The React framework for production',
    license: 'MIT License',
    url: 'https://github.com/vercel/next.js',
    icon: Code,
  },
  {
    name: 'React',
    description: 'A JavaScript library for building user interfaces',
    license: 'MIT License',
    url: 'https://react.dev',
    icon: Layers,
  },
  {
    name: 'Tailwind CSS',
    description: 'A utility-first CSS framework',
    license: 'MIT License',
    url: 'https://tailwindcss.com',
    icon: Zap,
  },
  {
    name: 'Lucide Icons',
    description: 'Beautiful & consistent icon toolkit',
    license: 'ISC License',
    url: 'https://lucide.dev',
    icon: Globe,
  },
  {
    name: 'TypeScript',
    description: 'JavaScript with syntax for types',
    license: 'Apache License 2.0',
    url: 'https://typescriptlang.org',
    icon: FileText,
  },
]

const acknowledgments = [
  'We are grateful to the open source community for creating and maintaining these amazing tools.',
  'This project is built on the shoulders of giants, and we stand on the work of countless contributors.',
  'Special thanks to all the developers who have contributed to the libraries we use.',
]

export default function LicensesPage() {
  return (
    <div className="min-h-screen bg-[#F9F0F2]">
      <PageShell
        title="Licenses"
        description="Open source licenses and acknowledgements."
      >
        <section className={tone.hero}>
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] ${tone.badge}`}>
                <FileText className="h-3.5 w-3.5 opacity-90" />
                Open Source Licenses
              </span>
              <h1 className={`mt-6 text-4xl leading-[1.1] sm:text-5xl lg:text-6xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                Built with
                <span className="mt-2 block text-[#670D2F]">open source</span>
              </h1>
              <p className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${tone.muted}`}>
                This project is built using amazing open source libraries. We are grateful to the developers and communities that make these tools available. Below are the licenses and acknowledgments for the software we use.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#FFFBFC]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A53860]">Software Licenses</p>
              <h2 className={`mt-4 text-3xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                Libraries we use
              </h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {licenses.map((license) => {
                const Icon = license.icon;
                return (
                  <div key={license.name} className={`rounded-2xl p-6 ${tone.panel}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#EDD6DE] bg-[#FFF5F7] text-[#A53860]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <a
                        href={license.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-xs font-semibold text-[#A53860] hover:text-[#670D2F]`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                    <h3 className={`mt-4 text-lg font-semibold ${tone.title}`}>{license.name}</h3>
                    <p className={`mt-2 text-sm leading-7 ${tone.muted}`}>{license.description}</p>
                    <div className={`mt-4 inline-flex items-center gap-2 rounded-full bg-[#FFF5F7] px-3 py-1.5 text-xs font-semibold text-[#A53860]`}>
                      {license.license}
                    </div>
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
                    <Heart className="h-7 w-7" />
                  </div>
                  <h2 className={`mt-6 text-3xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                    Acknowledgments
                  </h2>
                  <p className={`mt-4 text-sm leading-7 ${tone.muted}`}>
                    We want to express our gratitude to the open source community. Without the dedication and hard work of countless developers, this project would not be possible.
                  </p>
                </div>
                <div className="space-y-4">
                  {acknowledgments.map((ack) => (
                    <div key={ack} className={`flex items-start gap-3 rounded-2xl p-4 ${tone.soft}`}>
                      <Heart className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#A53860]" />
                      <p className={`text-sm leading-7 ${tone.muted}`}>{ack}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FFFBFC]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className={`rounded-3xl border border-[#E8CDD6] bg-white p-8 shadow-[0_24px_64px_rgba(58,5,25,0.07)] lg:p-12`}>
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#EDD6DE] bg-[#FFF5F7] text-[#A53860]">
                    <FileText className="h-7 w-7" />
                  </div>
                  <h2 className={`mt-6 text-3xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                    Need more details?
                  </h2>
                  <p className={`mt-4 text-sm leading-7 ${tone.muted}`}>
                    For complete license texts and more information about the open source projects we use, please visit their respective repositories and documentation.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${tone.badge}`}>
                    View Source Code
                  </button>
                  <button className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold border border-[#E8CDD6] bg-white text-[#3A0519] hover:bg-[#FFF0F3]`}>
                    Report an Issue
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
