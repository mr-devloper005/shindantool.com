import Link from "next/link";
import { PageShell } from "@/components/shared/page-shell";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Compass, FileText, ShieldCheck, Tag, Users } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

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
};

const mission = [
  {
    icon: Building2,
    title: "Business Discovery",
    description: "A structured directory where category, location, and contact details stay visible. Compare vendors like a professional roster.",
  },
  {
    icon: FileText,
    title: "Knowledge Sharing",
    description: "Publish articles, guides, and resources with editorial formatting that respects reading time and attention.",
  },
  {
    icon: Tag,
    title: "Deals & Notices",
    description: "A dedicated classifieds surface for time-sensitive offers, job postings, and community announcements.",
  },
];

const principles = [
  {
    title: "Data First, Photos Second",
    description: "We foreground hours, place, and contact paths before the gallery. Thumbnails confirm identity, not replace facts.",
  },
  {
    title: "Layouts Match Intent",
    description: "Each content type has its own presentation. Directories scan like registers, articles read like publications, and collections feel like shelves.",
  },
  {
    title: "Local First Design",
    description: "Built for teams who buy locally and work regionally. Geography and category stay visible throughout the experience.",
  },
];

const stats = [
  { label: "Active Listings", value: "8,600+" },
  { label: "Verified Businesses", value: "2,400+" },
  { label: "Knowledge Articles", value: "1,200+" },
  { label: "Community Members", value: "12,000+" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F9F0F2]">
      <PageShell
        title={`About ${SITE_CONFIG.name}`}
        description={`${SITE_CONFIG.name} is a modern platform for business discovery, knowledge sharing, and community engagement.`}
        actions={
          <>
            <Button variant="outline" className={tone.actionAlt} asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button className={tone.action} asChild>
              <Link href="/listings">Explore Listings</Link>
            </Button>
          </>
        }
      >
        <section className={tone.hero}>
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] ${tone.badge}`}>
                <Compass className="h-3.5 w-3.5 opacity-90" />
                Our Mission
              </span>
              <h1 className={`mt-6 text-4xl leading-[1.1] sm:text-5xl lg:text-6xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                A unified platform for
                <span className="mt-2 block text-[#670D2F]">discovery, knowledge, and community</span>
              </h1>
              <p className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${tone.muted}`}>
                {SITE_CONFIG.name} brings together business directories, editorial content, and curated collections in one thoughtfully designed space. Built for teams who value structure, clarity, and local-first discovery.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {mission.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className={`rounded-3xl p-6 ${tone.panel}`}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#EDD6DE] bg-[#FFF5F7] text-[#A53860]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className={`mt-4 text-xl font-semibold ${tone.title}`}>{item.title}</h3>
                    <p className={`mt-3 text-sm leading-7 ${tone.muted}`}>{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#FFFBFC]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A53860]">By The Numbers</p>
              <h2 className={`mt-4 text-3xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                Growing every day
              </h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className={`rounded-2xl p-6 text-center ${tone.soft}`}>
                  <div className={`text-4xl font-bold ${tone.title}`}>{stat.value}</div>
                  <div className={`mt-2 text-sm font-medium ${tone.muted}`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={tone.shell}>
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A53860]">Our Principles</p>
                <h2 className={`mt-4 text-3xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                  Design choices that reflect how you actually work
                </h2>
                <p className={`mt-4 max-w-xl text-sm leading-7 ${tone.muted}`}>
                  Every layout decision serves a specific use case. We don't force all content into the same card pattern—each type gets the presentation it deserves.
                </p>
              </div>
              <div className="space-y-4">
                {principles.map((principle) => (
                  <div key={principle.title} className={`rounded-2xl border-l-4 border-[#A53860] p-6 ${tone.panel}`}>
                    <h3 className={`text-lg font-semibold ${tone.title}`}>{principle.title}</h3>
                    <p className={`mt-2 text-sm leading-7 ${tone.muted}`}>{principle.description}</p>
                  </div>
                ))}
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
                    <ShieldCheck className="h-7 w-7" />
                  </div>
                  <h2 className={`mt-6 text-3xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                    Built for trust and transparency
                  </h2>
                  <p className={`mt-4 text-sm leading-7 ${tone.muted}`}>
                    We believe in clear information architecture, honest pricing, and tools that help teams make informed decisions. No dark patterns, no endless scrolling—just the data you need, presented clearly.
                  </p>
                </div>
                <div className={`rounded-2xl p-6 ${tone.soft}`}>
                  <h3 className={`text-lg font-semibold ${tone.title}`}>Ready to get started?</h3>
                  <p className={`mt-2 text-sm ${tone.muted}`}>
                    Join thousands of businesses and professionals already using our platform.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button className={tone.action} asChild>
                      <Link href="/listings">Browse Listings</Link>
                    </Button>
                    <Button variant="outline" className={tone.actionAlt} asChild>
                      <Link href="/contact">Get in Touch</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageShell>
    </div>
  );
}
