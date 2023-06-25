'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function TabbarPage() {
    const path = usePathname();
    console.log('path', path)
    return (
        <div className="tabs flex w-full pt-2 bg-slate-200 gap-x-2 dark:bg-slate-900">
            <Link href={`/`} className={`ml-5 tab tab-lg tab-lifted ${path === '/' && 'tab-active'}`}>My Cat</Link>
            <Link href={`mutter`} className={`tab tab-lg tab-lifted ${path === '/mutter' && 'tab-active'}`}>Mutter</Link>
            <Link href={`realdo`} className={`tab tab-lg tab-lifted ${path === '/realdo' && 'tab-active'}`}>Real Do</Link>
            <Link href={`uproar`} className={`tab tab-lg tab-lifted ${path === '/uproar' && 'tab-active'}`}>Uproar</Link>
        </div>
    );
}