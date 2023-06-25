import Link from "next/link";
import { headers } from 'next/headers'
import TabbarPage from "./tab";

export default function TabPage() {
    // const headersList = headers();
    // const header_url = headersList.get('x-url') || "";
    // const path = header_url.split('/')[3];
    return (
        <div className="flex justify-between">
            <TabbarPage />
        </div>
    );
}