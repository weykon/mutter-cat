'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import FixedRight from "./FixRight";
import NoAuthTabPage from "../(no-auth-main)/tab/page";

export default function TabbarPage({ bAuth }: { bAuth: boolean }) {
    const path = usePathname();
    if (!bAuth) {
        return <NoAuthTabPage />
    }
    else return (
        <div className="pt-2 flex justify-between items-center bg-secondary-content gap-x-2 dark:bg-slate-900 relative">
            <div className="tabs flex ">
                <Link href={`/`} className={`  hover:dark:bg-gray-700 tab-lifted ml-5 tab tab-md sm:tab-lg
                ${path === '/' ? ' bg-primary text-primary-content' : 'bg-base-100  hover:bg-gray-100'}  `}>
                    <p>My Cat</p>
                </Link>
                <Link href={`/mutter`}
                    className={` hover:dark:bg-gray-700  tab tab-md sm:tab-lg tab-lifted 
                    ${path === '/mutter' ? ' bg-primary text-primary-content' : 'bg-base-100 hover:bg-gray-100'}  `}>
                    <p>Mutter</p>
                </Link>
                <Link href={`/realdo`}
                    className={` hover:dark:bg-gray-700  tab tab-md sm:tab-lg tab-lifted 
                    ${path === '/realdo' ? ' bg-primary text-primary-content' : 'bg-base-100 hover:bg-gray-100'}  `}>
                    <p>Real Do</p>
                </Link>
                <Link href={`/uproar`}
                    className={` hover:dark:bg-gray-700  tab tab-md sm:tab-lg tab-lifted 
                    ${path === '/uproar' ? ' bg-primary text-primary-content' : 'bg-base-100 hover:bg-gray-100'}  `}>
                    <p>Uproar</p>
                </Link>
            </div>
            <FixedRight />
        </div>
    );
}
