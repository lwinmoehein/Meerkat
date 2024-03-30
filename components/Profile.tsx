"use client";

import {DropdownMenu, Flex, Text} from "@radix-ui/themes";
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
                <Flex gap={'2'} justify={'center'} align={'center'}>
                    <Text weight={'bold'}>{user?.name}</Text>
                    <PersonIcon/>
                </Flex>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
                <DropdownMenu.Item onClick={logOut} color={'red'}>Log Out <ExitIcon/></DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    )
}