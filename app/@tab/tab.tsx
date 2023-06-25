'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function TabbarPage() {
    const path = usePathname();
    console.log('path', path)
    return (
        <div className="tabs flex w-full pt-2 bg-slate-200 gap-x-2 dark:bg-slate-900 ">
            <Link href={`/`} className={` hover:bg-gray-700  ml-5 tab tab-lg tab-lifted ${path === '/' ? 'tab-active': 'text-stone-700 dark:text-stone-50'}`}>My Cat</Link>
            <Link href={`mutter`} className={` hover:bg-gray-700 tab tab-lg tab-lifted ${path === '/mutter'? 'tab-active': 'text-stone-700 dark:text-stone-50'}`}>Mutter</Link>
            <Link href={`realdo`} className={` hover:bg-gray-700 tab tab-lg tab-lifted ${path === '/realdo'? 'tab-active': 'text-stone-700 dark:text-stone-50'}`}>Real Do</Link>
            <Link href={`uproar`} className={` hover:bg-gray-700 tab tab-lg tab-lifted ${path === '/uproar'? 'tab-active': 'text-stone-700 dark:text-stone-50'}`}>Uproar</Link>
        </div>
    );
}