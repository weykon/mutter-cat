'use client'
import tailwind from "@/tailwind.config.js"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useAuthSession } from "../(auth_meta_data)/saver"

enum DetailIndex {
    None = 0,
    ThemeDetail,
    AvatarDetail
}
export default function FixedRight() {
    const router = useRouter();
    const supabase = createClientComponentClient();
    const { authMetaData: usermeta_data } = useAuthSession();

    const avatarDropdown = [
        { name: 'payment', route: '/payment' },
        { name: 'settings', route: '/settings/profile' },
        { name: 'Sign Out', function: true }
    ]
    const onClick = (name: string) => {
        document.querySelector('html')?.setAttribute('data-theme', name)
    }
    const [openDetailIndex, setOpenDetailIndex] = useState(0);
    const [openDetail, setOpenDetail] = useState(false)
    const closeAllDetail = () => {
        document.querySelectorAll('details').forEach(e => {
            e.removeAttribute('open')
        })
        setOpenDetail(false)
    }
    const theme_details_css = 'dropdown dropdown-end dropdown-bottom relative';
    const theme_summary_css = 'list-none btn-circle btn btn-sm sm:btn-md  items-center justify-center btn-base-400 flex';
    const theme_content_css = 'bg-opacity-50 backdrop-blur-md mt-2 h-[350px] overflow-scroll p-4 shadow w-[350px] sm:w-[450px] menu dropdown-content z-10 bg-stone-300 rounded-box grid grid-cols-2 sm:grid-cols-3 gap-3 backdrop-blur-md'
    const avatar_summary_css = 'list-none btn btn-circle btn-sm sm:btn-md items-center btn-base-400  overflow-hidden';
    const avatar_content_css = 'mt-2 bg-opacity-50 backdrop-blur-md h-[200px] shadow menu-md menu-vertical dropdown-content z-10 bg-stone-300 rounded-box pl-2'
    return (
        <div className="flex justify-end absolute right-0 h-14 items-center gap-x-3">
            {
                openDetail ? <div className=" opacity-0 fixed top-0 bottom-0 left-0 right-0 bg-white z-[5]"
                    onClick={() => {
                        closeAllDetail()
                    }}></div> : null
            }
            {/* theme */}
            <details className={`${theme_details_css}`}>
                <summary onClick={() => {
                    setOpenDetail(true);
                    setOpenDetailIndex(DetailIndex.ThemeDetail);
                }} className={`${theme_summary_css}`}>
                    <svg width="30" height="30" className="stroke-primary" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M18 6C18 9.31371 20.6863 12 24 12C27.3137 12 30 9.31371 30 6H35.4545L42 15.8182L36.2727 20.7273V42H11.7273V20.7273L6 15.8182L12.5455 6H18Z" fill="none" strokeWidth="4" strokeLinejoin="round" /></svg>
                </summary>
                {/* theme content */}
                {
                    openDetailIndex === 1 ? <ul className={`${theme_content_css} `}>
                        {
                            tailwind['daisyui']['themes'].map((e: string) => {
                                return (
                                    <li key={e} className=" transition-all w-32" onClick={() => onClick(e)}>
                                        <Item name={e} />
                                    </li>
                                )
                            })
                        }
                    </ul> : null
                }
            </details>
            {/* avatar */}
            <details className={`${theme_details_css}`}>
                <summary onClick={() => {
                    setOpenDetail(true);
                    setOpenDetailIndex(DetailIndex.AvatarDetail);
                }} className={`${avatar_summary_css} `}>
                    <img width={40} height={40} src={`${usermeta_data?.avatar_url ?? "/avatar.png"}`} alt="" />
                </summary>
                {/* avatar content */}
                {
                    openDetailIndex === 2 ? <ul className={`${avatar_content_css}`}>
                        {
                            avatarDropdown.map(e => {
                                return (
                                    <li key={e.name} className="mx-2 my-2">
                                        <button className=" btn btn-secondary text-secondary-content"
                                            onClick={async () => {
                                                closeAllDetail();
                                                e.route && router.push(e.route)
                                                if (e.function) {
                                                    await supabase.auth.signOut();
                                                    router.refresh()
                                                }
                                            }}>
                                            <p>{e.name}</p>
                                        </button>
                                    </li>
                                )
                            })
                        }
                    </ul> : null
                }
            </details>
        </div >
    )
}

function Item({ name }: { name: string }) {
    return (
        <div className="grid grid-cols-5 grid-rows-3 __web-inspector-hide-shortcut__" data-theme={name}>
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1">
            </div>
            <div className="bg-base-300 col-start-1 row-start-3">
            </div>
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                <div className="font-bold">
                    {name}
                </div>
                <div className="flex flex-wrap gap-1">
                    <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                        <div className="text-primary-content text-sm font-bold">
                            A
                        </div>
                    </div>
                    <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                        <div className="text-secondary-content text-sm font-bold">
                            A
                        </div>
                    </div>
                    <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                        <div className="text-accent-content text-sm font-bold">
                            A
                        </div>
                    </div>
                    <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                        <div className="text-neutral-content text-sm font-bold">
                            A
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}