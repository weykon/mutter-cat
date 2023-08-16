import { cookies } from 'next/headers'
import TabbarPage from './(tab)/tab'
import './globals.css'
import { Inter } from 'next/font/google'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import NoAuthTabPage from './(no-auth-main)/tab/page'
import Unauthenticated from './(no-auth-main)/_page'
import { AuthSessionProvider } from './(auth_meta_data)/saver'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Mutter Cat',
    description: 'AI Forum for Mutter Person like Cat',
    manifest: '/site.webmanifest',
    appleWebApp: {
        title: "Mutter Cat",
        statusBarStyle: "default",
    },
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode,
    tab: React.ReactNode
}) {
    const supabase = createServerComponentClient({ cookies })
    const { data: { session } } = (await supabase.auth.getSession());
    console.log('session in root layout');

    return (
        <html lang="en" data-theme={"lemonade"}>
            <head>
                <link rel="manifest" href="/site.webmanifest"></link>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link
                    rel="apple-touch-icon"
                    href="/apple-icon?<generated>"
                    type="image/<generated>"
                    sizes="<generated>"
                />
            </head>
            <body className={inter.className}>
                <AuthSessionProvider authMetaData={session?.user.user_metadata} session={session ?? undefined}>
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
                </AuthSessionProvider>
            </body>
        </html>
    )
}
