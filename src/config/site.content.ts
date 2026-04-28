import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'Business registry & local discovery',
  },
  footer: {
    tagline: 'Structured profiles for businesses, services, and buyers',
  },
  hero: {
    badge: 'Local business data, first',
    title: ['Find the right', 'company without the photo-first noise.'],
    description:
      'Shindantool is built like a business register: hours, locations, and proof points read clearly before the hero image ever does.',
    primaryCta: {
      label: 'Open business directory',
      href: '/listings',
    },
    secondaryCta: {
      label: 'Browse short listings',
      href: '/classifieds',
    },
    searchPlaceholder: 'Search businesses, categories, cities, or services',
    focusLabel: 'Scope',
    featureCardBadge: 'Live field rows',
    featureCardTitle: 'The registry refreshes with what matters for decisions.',
    featureCardDescription:
      'Categories, service areas, and contact paths stay in focus so you compare businesses on facts, not stock photography.',
  },
  home: {
    metadata: {
      title: 'Shindantool | Business directory & local listings',
      description:
        'Discover verified business listings, operating details, and contact paths in a data-forward directory built for local decisions.',
      openGraphTitle: 'Shindantool | Business directory',
      openGraphDescription:
        'Search businesses and short listings with structured data, trust cues, and clear next steps to call, visit, or follow up.',
      keywords: [
        'business directory',
        'local listings',
        'Shindantool',
        'verified businesses',
        'B2B discovery',
        'local services',
      ],
    },
    introBadge: 'What this is',
    introTitle: 'A business register where facts lead and photography follows.',
    introParagraphs: [
      'The directory is tuned for how teams and locals actually shortlist: category fit, service area, hours, and a clean path to the right contact.',
      'Listings, classified-style notices, and the rest of the product stay on the same rails so a visitor can start with a business and still reach supporting formats when they need them.',
    ],
    sideBadge: 'In one pass',
    sidePoints: [
      'Business metadata grouped for scanning, not for decoration.',
      'Listings, deals, and profiles with distinct layouts per format.',
      'Search and filters stay light so the page remains fast to read on mobile.',
      'Motion and color reinforce hierarchy, not attention hacks.',
    ],
    primaryLink: {
      label: 'Browse the directory',
      href: '/listings',
    },
    secondaryLink: {
      label: 'See local deals',
      href: '/classifieds',
    },
  },
  cta: {
    badge: 'List your business',
    title: 'Add a listing with structured data buyers can actually use.',
    description:
      'Capture category, service area, hours, and the right call-to-action in one flow, then let search and the directory do the rest.',
    primaryCta: {
      label: 'Create an account',
      href: '/register',
    },
    secondaryCta: {
      label: 'Contact us',
      href: '/contact',
    },
  },
  taskSectionHeading: 'Latest {label}',
  taskSectionDescriptionSuffix: 'Browse the newest posts in this section.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Articles and insight',
    description: 'Read explainers, guides, and long-form context that supports the directory and listings.',
  },
  listing: {
    title: 'Business directory',
    description: 'Browse verified business listings with structured details for faster shortlisting.',
  },
  classified: {
    title: 'Deals and notices',
    description: 'Scan time-sensitive offers, roles, and short listings alongside the business directory.',
  },
  image: {
    title: 'Visual library',
    description: 'View image-led stories and media posts connected to the broader site.',
  },
  profile: {
    title: 'Public profiles',
    description: 'Explore brands, people, and teams behind listings and content.',
  },
  sbm: {
    title: 'Saved research',
    description: 'Open curated link collections and references saved by the team.',
  },
  pdf: {
    title: 'Documents',
    description: 'Download handbooks, PDFs, and one-pagers that sit alongside listings.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: {
    title: 'A directory built to compare businesses, not just scroll past photos',
    paragraphs: [
      'Each business surface centers category, service area, hours, and a clear way to get in touch—so teams can line up two vendors and decide without wading through filler.',
      'When you need depth, related articles, PDFs, and profiles still sit one click away without turning this page into a blog layout.',
    ],
    links: [
      { label: 'Open deals and notices', href: '/classifieds' },
      { label: 'Site search', href: '/search' },
    ],
  },
  article: {
    title: 'Editorial and guides that back up the directory',
    paragraphs: [
      'Long-form pieces sit on a calmer reading line so the typography can breathe while still linking back into listings, PDFs, and other surfaces.',
    ],
    links: [
      { label: 'Business directory', href: '/listings' },
      { label: 'Deals and notices', href: '/classifieds' },
    ],
  },
  classified: {
    title: 'Faster, shorter listings for time-boxed or negotiable needs',
    paragraphs: [
      'This lane keeps urgency and next steps in view, while still pointing back to the main directory when a buyer wants a more permanent partner.',
    ],
    links: [
      { label: 'Business directory', href: '/listings' },
      { label: 'Search everything', href: '/search' },
    ],
  },
  image: {
    title: 'Galleries when the story is visual first',
    paragraphs: [
      'A separate visual rhythm for campaigns, case studies, and work samples without borrowing the data-first layout used on business listings.',
    ],
    links: [
      { label: 'Listings', href: '/listings' },
      { label: 'Articles', href: '/articles' },
    ],
  },
  profile: {
    title: 'Who stands behind a listing or article',
    paragraphs: [
      'Profile pages anchor trust with identity, then route visitors to listings, content, and documents in context.',
    ],
    links: [
      { label: 'Directory', href: '/listings' },
      { label: 'Articles', href: '/articles' },
    ],
  },
  sbm: {
    title: 'Link libraries for teams doing research',
    paragraphs: [
      'Bookmark collections stay text-forward so reference material feels distinct from the directory and gallery surfaces.',
    ],
    links: [
      { label: 'Articles', href: '/articles' },
      { label: 'Listings', href: '/listings' },
    ],
  },
  pdf: {
    title: 'Handbooks, decks, and downloadable collateral',
    paragraphs: [
      'The PDF area keeps file-first browsing separate from the live business directory, while still cross-linking when relevant.',
    ],
    links: [
      { label: 'Articles', href: '/articles' },
      { label: 'Listings', href: '/listings' },
    ],
  },
  social: {
    title: 'Short updates and signals',
    paragraphs: [
      'Lightweight updates that can lead into the directory or long-form work without duplicating a listing card.',
    ],
    links: [
      { label: 'Listings', href: '/listings' },
      { label: 'Articles', href: '/articles' },
    ],
  },
  comment: {
    title: 'Responses tied to articles',
    paragraphs: [
      'Threaded context kept close to the post it references instead of a standalone feed format.',
    ],
    links: [
      { label: 'Articles', href: '/articles' },
      { label: 'Listings', href: '/listings' },
    ],
  },
  org: {
    title: 'Team and org surfaces',
    paragraphs: [
      'Structured org pages for agencies and collectives, aligned with the directory and PDF library.',
    ],
    links: [
      { label: 'Business directory', href: '/listings' },
      { label: 'Documents', href: '/pdf' },
    ],
  },
}
