import TabPage from './@tab/page'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mutter Cat',
  description: 'AI Forum for Mutter Person like Cat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="lemonade">
      <body className={inter.className}>
        <div className='w-full h-full'>
          <TabPage />
          {children}
        </div>
      </body>
    </html>
  )
}
