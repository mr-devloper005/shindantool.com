import { PageShell } from "@/components/shared/page-shell";
import { FileText, ShieldCheck, AlertTriangle, User, Clock, ChevronRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

const tone = {
  shell: 'bg-[#F9F0F2] text-[#3A0519]',
  hero: 'relative overflow-hidden border-b border-[#E5CCD3] bg-gradient-to-b from-[#FFFBFC] via-[#FDF5F6] to-[#F5E4EA]',
  panel: 'border border-[#E8CDD6] bg-white shadow-[0_24px_64px_rgba(58,5,25,0.07)]',
  soft: 'border border-[#EDD6DE] bg-[#FFF5F7]',
  muted: 'text-[#6B3D4F]',
  title: 'text-[#3A0519]',
  badge: 'bg-[#3A0519] text-[#FEF7F8]',
};

const sections = [
  {
    icon: User,
    title: 'Account Responsibilities',
    description: 'You are responsible for maintaining the security of your account and all activities that occur under your account.',
    details: [
      'Keep your password secure and do not share it with others',
      'Notify us immediately if you suspect unauthorized access',
      'You are responsible for all content posted from your account',
      'Provide accurate and complete information when creating your account',
    ],
  },
  {
    icon: FileText,
    title: 'Content Ownership & Licensing',
    description: 'You retain ownership of the content you publish, but grant us a license to display and distribute it on our platform.',
    details: [
      'You own all content you submit to the platform',
      'You grant us a worldwide, non-exclusive license to display your content',
      'You represent that you have the right to publish all content you submit',
      'We reserve the right to remove content that violates these terms',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Acceptable Use Policy',
    description: 'Our platform is designed for legitimate business directory and content sharing. Certain activities are strictly prohibited.',
    details: [
      'No spam, harassment, or abusive behavior',
      'No fraudulent or misleading business listings',
      'No illegal or prohibited content',
      'No attempts to circumvent security measures or exploit vulnerabilities',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Termination & Suspension',
    description: 'We reserve the right to suspend or terminate accounts that violate these terms or engage in harmful activities.',
    details: [
      'We may suspend accounts for violations of these terms',
      'We may terminate accounts for repeated or severe violations',
      'You may terminate your account at any time',
      'Termination does not relieve you of obligations incurred prior to termination',
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F9F0F2]">
      <PageShell
        title="Terms of Service"
        description={`The rules and guidelines for using ${SITE_CONFIG.name}.`}
      >
        <section className={tone.hero}>
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] ${tone.badge}`}>
                <FileText className="h-3.5 w-3.5 opacity-90" />
                Terms of Service
              </span>
              <h1 className={`mt-6 text-4xl leading-[1.1] sm:text-5xl lg:text-6xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                Rules and
                <span className="mt-2 block text-[#670D2F]">guidelines</span>
              </h1>
              <p className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${tone.muted}`}>
                These terms outline the rules and responsibilities for using {SITE_CONFIG.name}. By using our platform, you agree to these terms.
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
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A53860]">Terms Overview</p>
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
                    Questions about our terms?
                  </h2>
                  <p className={`mt-4 text-sm leading-7 ${tone.muted}`}>
                    If you have questions about these terms or need clarification on any point, please contact our legal team. We're happy to help you understand your rights and responsibilities.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${tone.badge}`}>
                    Contact Legal Team
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
  );
}
