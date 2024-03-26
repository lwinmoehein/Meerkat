"use client";

import {HomeIcon, PersonIcon} from "@radix-ui/react-icons";
import {usePathname} from "next/navigation";
import {Flex, Heading, TabNav} from "@radix-ui/themes";


const links = [
    {
        name: 'Sites',
        href: '/',
        icon: HomeIcon },
    {
        name: 'Settings',
        href: '/settings',
        icon: null,
    }
];

export default function NavBar(){
    const pathname = usePathname()

    const linkItems = links.map((link,index) =>
        <TabNav.Link key={index} href={link.href} active={link.href===pathname}>
            {link.name}
        </TabNav.Link>
    );
    return (
        <Flex direction={'column'}>
            <Flex p={'2'} maxHeight={'80px'} justify={'between'} align={'center'}>
                <Heading>Meerkat</Heading>
                <PersonIcon/>
            </Flex>
            <TabNav.Root>
                {linkItems}
            </TabNav.Root>
        </Flex>

    )
}