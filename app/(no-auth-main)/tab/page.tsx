'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NoAuthTabPage() {
    const path = usePathname();
    return (
        <div className="pt-2 flex justify-start items-center bg-secondary-content gap-x-2 dark:bg-slate-900 relative">
            <div className="tabs flex gap-x-10">
                <Link href={`/`} className={`  hover:dark:bg-gray-700 tab-lifted ml-5 tab tab-md sm:tab-lg
    ${path === '/' ? ' bg-primary text-primary-content' : 'bg-base-100  hover:bg-gray-100'}  `}>
                    <p>Home</p>
                </Link>
            </div>
        </div>
    );
}