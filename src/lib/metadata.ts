import { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: {
    default: 'Kingsly JR - Java Full Stack Developer',
    template: '%s | Kingsly JR',
  },
  description:
    'Java Full Stack Developer specializing in Spring Boot, React, and RESTful APIs. Building secure, scalable, and user-focused web applications.',
  keywords: [
    'Kingsly JR',
    'Kingsly Joyal Raj',
    'Java Developer',
    'Full Stack Developer',
    'Spring Boot',
    'React',
    'JavaScript',
    'Java Full Stack',
    'Portfolio',
    'REST API',
    'Spring Security',
  ],
  authors: [
    {
      name: 'Kingsly Joyal Raj',
    },
  ],
  creator: 'Kingsly JR',
  metadataBase: new URL('https://kingslyjr.dev'),
  icons: {
    icon: '/new-logo.webp',
  },
  openGraph: {
    title: 'Kingsly JR - Java Full Stack Developer',
    description:
      'Portfolio of Kingsly JR, Java Full Stack Developer specializing in Spring Boot, React, and building secure, scalable web applications.',
    url: 'https://kingslyjr.dev',
    siteName: 'Kingsly JR Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kingsly JR - Java Full Stack Developer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kingsly JR - Java Full Stack Developer',
    description:
      'Portfolio of Kingsly JR, Java Full Stack Developer specializing in Spring Boot, React, and building secure, scalable web applications.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

