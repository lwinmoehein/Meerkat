"use client";

import {Button, DropdownMenu, Flex, Text} from "@radix-ui/themes";
import {ExitIcon, PersonIcon} from "@radix-ui/react-icons";
import {signOut} from "@/app/lib/actions";
import {redirect} from "next/navigation";

export async function Profile({user}:{user:User}){

    const logOut = async ()=>{
        await signOut()
    }

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <Button variant={'soft'}>
                    <Text weight={'bold'}>{user?.name}</Text>
                    <PersonIcon/>
                </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
                <DropdownMenu.Item onClick={logOut} color={'red'}>Log Out <ExitIcon/></DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    )
}