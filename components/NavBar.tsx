"use client";

import {ExitIcon, HomeIcon, PersonIcon} from "@radix-ui/react-icons";
import {redirect, usePathname, useRouter} from "next/navigation";
import {DropdownMenu, Flex, Heading, TabNav} from "@radix-ui/themes";
import {signOut} from "@/app/lib/actions";


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
    const router = useRouter()

    const logOut = async () => {
        await signOut()
        router.replace("/login")
    }

    const linkItems = links.map((link,index) =>
        <TabNav.Link key={index} href={link.href} active={link.href===pathname}>
            {link.name}
        </TabNav.Link>
    );
    return (
        <Flex direction={'column'}>
            <Flex p={'2'} maxHeight={'80px'} justify={'between'} align={'center'}>
                <Heading>Meerkat</Heading>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <PersonIcon/>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                        <DropdownMenu.Item onClick={logOut} color={'red'}>Log Out <ExitIcon/></DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            </Flex>
            <TabNav.Root>
                {linkItems}
            </TabNav.Root>
        </Flex>

    )
}