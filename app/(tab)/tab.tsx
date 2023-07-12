'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import FixedRight from "./FixRight";

export default function TabbarPage() {
    const path = usePathname();
    return (
        <div className="flex justify-between items-center bg-secondary-content gap-x-2 dark:bg-slate-900 ">
            <div className="tabs flex w-full pt-2">
                <Link href={`/`} className={`  hover:dark:bg-gray-700 tab-lifted ml-5 tab tab-lg
                ${path === '/' ? ' bg-primary text-primary-content' : 'bg-base-100  hover:bg-gray-100'}  `}>
                    My Cat
                </Link>
                <Link href={`mutter`}
                    className={` hover:dark:bg-gray-700  tab tab-lg tab-lifted 
                    ${path === '/mutter' ? ' bg-primary text-primary-content' : 'bg-base-100 hover:bg-gray-100'}  `}>
                    Mutter
                </Link>
                <Link href={`realdo`}
                    className={` hover:dark:bg-gray-700  tab tab-lg tab-lifted 
                    ${path === '/realdo' ? ' bg-primary text-primary-content' : 'bg-base-100 hover:bg-gray-100'}  `}>
                    Real Do
                </Link>
                <Link href={`uproar`}
                    className={` hover:dark:bg-gray-700  tab tab-lg tab-lifted 
                    ${path === '/uproar' ? ' bg-primary text-primary-content' : 'bg-base-100 hover:bg-gray-100'}  `}>
                    Uproar
                </Link>
            </div>

            <FixedRight />

        </div>
    );
}
