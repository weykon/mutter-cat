import TabbarPage from './(tab)/tab'
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
  children: React.ReactNode,
  tab: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="lemonade">
      <body className={inter.className}>
        <div className='w-full h-full flex-col flex'>
          <TabbarPage />
          {children}
        </div>
      </body>
    </html>
  )
}
