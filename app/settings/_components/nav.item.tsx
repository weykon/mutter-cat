'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavItem(e: { route: string; name: string; }) {
    const pathname = usePathname();
    const link_css = "transition-all btn btn-secondary border-b-4 border-secondary m-2"
    return <Link key={e.name} href={`/settings/${e.route}`}
        className={`${link_css} ${pathname === '/settings/' + e.name ?
            'bg-accent-focus hover:bg-accent-focus'
            : 'hover:rounded-3xl hover:border-secondary-focus'}`}
    >
        <button className="text-primary">{e.name}</button>
    </Link>;
}