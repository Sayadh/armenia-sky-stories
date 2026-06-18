import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import {
  Noto_Sans_Armenian,
  Noto_Serif_Armenian,
  Geist_Mono,
} from 'next/font/google'
import './globals.css'

const notoSans = Noto_Sans_Armenian({
  variable: '--font-noto-sans',
  subsets: ['armenian', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const notoSerif = Noto_Serif_Armenian({
  variable: '--font-noto-serif',
  subsets: ['armenian', 'latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Armenia Sky Stories | Դրոնային նկարահանումներ Հայաստանում',
  description:
    'Պրոֆեսիոնալ դրոնային նկարահանումներ Հայաստանի ողջ տարածքում։ Տեսարժան վայրեր, հողատարածքներ, առանձնատներ, զբոսաշրջային նախագծեր և անհատական նկարահանումներ։',
  generator: 'v0.app',
  keywords: [
    'դրոնային նկարահանում',
    'drone Armenia',
    'aerial videography Armenia',
    'դրոն Հայաստան',
    'օդային նկարահանում',
  ],
  openGraph: {
    title: 'Armenia Sky Stories | Դրոնային նկարահանումներ Հայաստանում',
    description:
      'Հայաստանը՝ նոր տեսանկյունից։ Պրոֆեսիոնալ դրոնային նկարահանումներ ողջ երկրում։',
    type: 'website',
    locale: 'hy_AM',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#5BC0EB',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="hy"
      className={`${notoSans.variable} ${geistMono.variable} ${notoSerif.variable}`}
    >
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
