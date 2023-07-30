import { NavItem } from "./_components/nav.item";

export default function SettingsLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-base-200 flex-row justify-start items-start w-full h-full flex z-[1]">
            <div className="flex flex-col w-32 md:w-56 lg:w-64 mr-5 mt-4">
                {
                    settings.map(e => (
                        <NavItem route={e.route} name={e.name} />
                    ))
                }
            </div>
            <Right>
                {children}
            </Right>
        </div>
    );
}

function Right({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-8">
            {children}
        </div>
    );
}

const settings = [
    { route: 'profile', name: 'profile' },
    { route: 'account', name: 'account' },
    { route: 'security', name: 'security' },
    { route: 'notification', name: 'notification' },
    { route: 'payment', name: 'payment' },
    // { route: 'theme', name: 'theme' },
    // { route: 'language', name: 'language' },
    { route: 'help', name: 'help' },
]
