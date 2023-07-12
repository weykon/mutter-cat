
'use client'
import tailwind from "@/tailwind.config.js"
import { useRouter } from "next/navigation"

const avatarDropdown = [
    { name: 'payment', },
    { name: 'settings' }
]

export default function FixedRight() {
    const router = useRouter()
    const onClick = (name: string) => {
        document.querySelector('html')?.setAttribute('data-theme', name)
    }
    return (
        <div className="top-0 right-5 absolute flex justify-end">
            <details className="dropdown mb-32 dropdown-end dropdown-bottom">
                <summary className="m-1 btn">
                    <svg width="30" height="30" className="stroke-primary" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M18 6C18 9.31371 20.6863 12 24 12C27.3137 12 30 9.31371 30 6H35.4545L42 15.8182L36.2727 20.7273V42H11.7273V20.7273L6 15.8182L12.5455 6H18Z" fill="none" strokeWidth="4" strokeLinejoin="round" /></svg>
                </summary>
                <ul className="mt-2 h-[350px] overflow-scroll p-4 shadow w-[480px] menu dropdown-content z-10 bg-stone-300 rounded-box grid grid-cols-3 gap-3">
                    {
                        tailwind['daisyui']['themes'].map((e: string) => {
                            return (
                                <li key={e} className=" w-32" onClick={() => onClick(e)}>
                                    <Item name={e} />
                                </li>
                            )
                        })
                    }
                </ul>
            </details>
            <details className="dropdown mb-32 dropdown-end dropdown-bottom">
                <summary className="m-1 btn">
                    <img width={40} height={40} src="avatar.png" alt="" />
                </summary>
                <ul className=" mt-2 h-[350px] shadow w-48 menu-xs menu-vertical dropdown-content z-10 bg-stone-300 rounded-box">
                    {
                        avatarDropdown.map(e => {
                            return (
                                <li key={e.name}>
                                    <button className="btn-xs" onClick={() => {
                                        router.push(e.name)
                                    }}>
                                        <p>{e.name}</p>
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </details>
        </div>
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