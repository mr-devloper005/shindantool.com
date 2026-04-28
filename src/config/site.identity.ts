export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'd0jvjcymxu',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Shindantool',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Business directory and local deals',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'Shindantool is a data-first business directory for comparing companies, service areas, and contact paths before you book a call or a visit.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'shindantool.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://shindantool.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || 'AIzaSyBco7dIECu3rJWjP3J0MImnR_uxlbeqAe0',

} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const

