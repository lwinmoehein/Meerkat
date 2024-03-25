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
        <div></div>
    )
}