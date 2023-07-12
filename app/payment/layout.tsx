
export default function PaymentLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex-col justify-start items-center w-full h-full flex z-[1]">
            <ul className="flex justify-around items-center flex-row min-w-full text-center min-h-full">
                {children}
            </ul>
        </div>
    );
}
const payments = [
    {
        name: 'basic',
        description: [
            "basic project",
        ],
        bill: "Free",
        time: "/mouth"
    },
    {
        name: 'advance',
        description: [
            "advance project",
            "100 summary/week",
            "10 cat look/week",
            "10 cat food/week"
        ]
    },
    {
        name: 'organization',
        description: [
            "organization project",
        ]
    }
]
function Item() {
    return (
        <div>

        </div>
    )
}