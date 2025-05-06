import './../styles/globals.css';

export const metadata = {
  title: 'Docovery',
  description: 'Innovation, Development, and Opensource',
  icons: {
    icon: '/assets/logo.svg',
    shortcut: '/assets/logo.svg',
    apple: '/assets/logo.svg',
  },
  openGraph: {
    title: 'Docovery',
    description: 'Innovation, Development, and Opensource',
    url: 'https://docovery.vercel.app',
    siteName: 'Docovery',
    images: '/assets/logo.svg',
    locale: 'en-US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
