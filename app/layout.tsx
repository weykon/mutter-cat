import { cookies } from 'next/headers'
import TabbarPage from './(tab)/tab'
import './globals.css'
import { Inter } from 'next/font/google'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mutter Cat',
  description: 'AI Forum for Mutter Person like Cat',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,
  tab: React.ReactNode
}) {
  // const supabase = createServerComponentClient({ cookies })
  // const { session } = (await supabase.auth.getSession()).data
  // const bAuth = !!session
  const bAuth = true 
  console.log(bAuth)

  return (
    <html lang="en" data-theme={"lemonade"}>
      <body className={inter.className}>
        <div className='w-full h-full flex-col flex'>
          <TabbarPage bAuth={bAuth} />
          {children}
        </div>
      </body>
    </html>
  )
}
