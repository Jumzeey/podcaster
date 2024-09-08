'use client'

import Image from 'next/image'
import Link from 'next/link'
import links from '@constants/sidebarLinks.json'
import React from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useAuth } from '@clerk/nextjs' 

const LeftSidebar = () => {
    const pathname = usePathname();
    const { isSignedIn } = useAuth(); // Check if the user is signed in

    console.log('signed in: ', isSignedIn)
    return (
        <section className='left_sidebar '>
            <nav className='flex flex-col gap-6'>
                <Link href="/" className='flex items-center cursor-pointer gap-1 pb-10 max-lg:justify-center'>
                    <Image src="/icons/logo.svg" alt='logo' width={23} height={27} />
                    <h1 className="text-24 font-extrabold text-white-1 max-lg:hidden">Podcaster</h1>
                </Link>

                {links.map(({ route, label, imgURL }) => {
                    const isActive = pathname === route || pathname.startsWith(`${route}/`)
                    if ((route === "/profile") && !isSignedIn) {
                        return null;
                    }

                    return <Link
                        href={route}
                        key={label}
                        className=
                        {cn('flex gap-3 items-center py-4 justify-center max-lg:px-4 lg:justify-start',
                            { 'bg-nav-focus border-r-4 border-orange-1': isActive })}>
                        <Image src={imgURL} alt='labelIcon' width={24} height={24} />
                        <p>{label}</p>
                    </Link>
                })}
            </nav>
        </section>
    )
}

export default LeftSidebar