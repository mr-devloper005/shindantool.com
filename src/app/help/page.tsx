import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { BookOpen, Building2, FileText, MessageSquare, Search, ArrowRight, HelpCircle, Zap } from 'lucide-react'

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

const helpTopics = [
  {
    icon: Building2,
    title: 'Business Listings',
    description: 'Learn how to create, manage, and optimize your business directory listings.',
    link: '/listings',
  },
  {
    icon: FileText,
    title: 'Articles & Content',
    description: 'Publish editorial content, guides, and knowledge resources.',
    link: '/articles',
  },
  {
    icon: BookOpen,
    title: 'Collections & Bookmarks',
    description: 'Organize resources, create collections, and share knowledge.',
    link: '/sbm',
  },
  {
    icon: Zap,
    title: 'Quick Start Guide',
    description: 'Get up and running in minutes with our step-by-step tutorial.',
    link: '/about',
  },
]

const faqs = [
  {
    id: 'faq-1',
    question: 'How do I add my business to the directory?',
    answer: 'Navigate to the listings page and click "New Listing". Fill in your business details including category, location, contact information, and description. Your listing will be reviewed and published within 24 hours.',
  },
  {
    id: 'faq-2',
    question: 'Can I edit my listing after it\'s published?',
    answer: 'Yes, you can edit your listing at any time. Go to your dashboard, find your listing, and click "Edit". Changes are reflected immediately after you save.',
  },
  {
    id: 'faq-3',
    question: 'How are listings verified?',
    answer: 'We verify listings through multiple methods including business license verification, phone confirmation, and address validation. Verified businesses display a badge on their listing.',
  },
  {
    id: 'faq-4',
    question: 'Is there a cost to list my business?',
    answer: 'Basic listings are free. We offer premium placement and enhanced visibility options for businesses that want additional exposure. Contact us for custom pricing.',
  },
  {
    id: 'faq-5',
    question: 'How do I report an issue with a listing?',
    answer: 'Use the "Report" button on any listing to flag incorrect information. Our team reviews all reports within 48 hours and takes appropriate action.',
  },
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-[#F9F0F2]">
      <PageShell
        title="Help Center"
        description="Find answers, guides, and best practices."
        actions={
          <Button className={tone.action} asChild>
            <Link href="/contact">Contact Support</Link>
          </Button>
        }
      >
        <section className={tone.hero}>
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] ${tone.badge}`}>
                <HelpCircle className="h-3.5 w-3.5 opacity-90" />
                Help Center
              </span>
              <h1 className={`mt-6 text-4xl leading-[1.1] sm:text-5xl lg:text-6xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                How can we
                <span className="mt-2 block text-[#670D2F]">help you today?</span>
              </h1>
              <p className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${tone.muted}`}>
                Find answers to common questions, browse our guides, or get in touch with our support team. We're here to help you make the most of our platform.
              </p>
            </div>

            <div className="mt-10 max-w-2xl">
              <div className={`flex items-center gap-3 rounded-2xl border border-[#E8CDD6] bg-white px-4 py-3 shadow-sm`}>
                <Search className="h-5 w-5 text-[#A53860]" />
                <input
                  type="text"
                  placeholder="Search for help topics..."
                  className="flex-1 bg-transparent text-sm text-[#3A0519] placeholder:text-[#6B3D4F]/60 outline-none"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FFFBFC]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A53860]">Browse Topics</p>
              <h2 className={`mt-4 text-3xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                Find what you're looking for
              </h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {helpTopics.map((topic) => {
                const Icon = topic.icon;
                return (
                  <Link key={topic.title} href={topic.link} className={`group block rounded-2xl border border-[#E8CDD6] bg-white p-6 transition hover:-translate-y-1 hover:border-[#A53860]/50 hover:shadow-[0_20px_60px_rgba(58,5,25,0.1)]`}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#EDD6DE] bg-[#FFF5F7] text-[#A53860] transition group-hover:bg-[#A53860] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className={`mt-4 text-lg font-semibold ${tone.title}`}>{topic.title}</h3>
                    <p className={`mt-2 text-sm leading-7 ${tone.muted}`}>{topic.description}</p>
                    <div className={`mt-4 flex items-center gap-2 text-sm font-semibold text-[#A53860] group-hover:text-[#670D2F]`}>
                      Learn more
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
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A53860]">Frequently Asked Questions</p>
                <h2 className={`mt-4 text-3xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                  Common questions answered
                </h2>
                <p className={`mt-4 max-w-xl text-sm leading-7 ${tone.muted}`}>
                  Quick answers to the most common questions about using our platform. Can't find what you're looking for? Reach out to our support team.
                </p>
              </div>
              <div className={`rounded-3xl p-8 ${tone.panel}`}>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id} className={`border border-[#EDD6DE] rounded-2xl px-6`}>
                      <AccordionTrigger className={`text-left text-base font-semibold ${tone.title} hover:no-underline`}>
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className={`text-sm leading-7 ${tone.muted}`}>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
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
                    <MessageSquare className="h-7 w-7" />
                  </div>
                  <h2 className={`mt-6 text-3xl ${tone.title}`} style={{ fontFamily: 'var(--font-display)' }}>
                    Still need help?
                  </h2>
                  <p className={`mt-4 text-sm leading-7 ${tone.muted}`}>
                    Our support team is here to help. Reach out with any questions and we'll get back to you within 24 hours.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button className={tone.action} asChild>
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                  <Button variant="outline" className={tone.actionAlt} asChild>
                    <Link href="/about">About Us</Link>
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
