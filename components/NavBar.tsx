"use client";

import Link from "next/link";
import {HamburgerMenuIcon, HomeIcon} from "@radix-ui/react-icons";
import {usePathname} from "next/navigation";
import clsx from 'clsx';


const links = [
    {
        name: 'Home',
        href: '/',
        icon: HomeIcon },
    {
        name: 'Login',
        href: '/login',
        icon: null,
    },
    {
        name: 'Register',
        href: '/register',
        icon: null,
    }
];

export default function NavBar(){
    const pathname = usePathname()
    return (
        <header
            className="font-bold flex justify-between fixed top-0 left-0 w-100 items-center px-4 py-4 bg-gradient-to-tl bg-green-400 w-full  shadow-md">
            <h1 className="text-2xl font-bold text-white">Meerkat</h1>
            <nav className="hidden md:flex space-x-4">
                {
                   links.map((link,index) => {
                       return (
                           <Link key={index}   href={link.href}
                                     className={clsx('text-white px-3 py-1 hover:bg-gray-100 hover:text-sky-500 flex items-center rounded-md ',{
                                         'bg-white text-sky-600': pathname === link.href,
                                     })}>
                               <span>{link.name}</span>
                           </Link>
                       );
                   })}
            </nav>
            <div className="md:hidden">
                <button
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white text-white p-2 rounded-md hover:bg-gray-700">
                    <HamburgerMenuIcon/>
                </button>
            </div>
        </header>
    )
}