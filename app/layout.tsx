import { cookies } from 'next/headers'
import TabbarPage from './(tab)/tab'
import './globals.css'
import { Inter } from 'next/font/google'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import NoAuthTabPage from './(no-auth-main)/tab/page'
import Unauthenticated from './(no-auth-main)/page'

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
    const supabase = createServerComponentClient({ cookies })
    const { data: { session } } = (await supabase.auth.getSession());
    console.log('session', session);

    return (
        <html lang="en" data-theme={"lemonade"}>
            <body className={inter.className}>
                {
                    session ?
                        <div className='w-full h-full flex-col flex'>
                            <TabbarPage />
                            {children}
                        </div>
                        :
                        <div className='w-full h-full flex-col flex'>
                            <NoAuthTabPage />
                            <Unauthenticated />
                        </div>
                }

            </body>
        </html>
    )
}
