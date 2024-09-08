import Image from "next/image";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="relative h-screen w-full">
            <div className="size-full absolute">
                <Image src='/images/bg-img.png' alt="bgimage" fill className="size-full" />
                {children}
            </div>
        </main>
    );
}
