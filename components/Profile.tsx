import {DropdownMenu, Flex, Text} from "@radix-ui/themes";
import {ExitIcon, PersonIcon} from "@radix-ui/react-icons";
import {getUser, signOut} from "@/app/lib/actions";

export async function Profile(){
    const user = await getUser()

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <Flex gap={'2'} justify={'center'} align={'center'}>
                    <Text weight={'bold'}>{user?.name}</Text>
                    <PersonIcon/>
                </Flex>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
                <DropdownMenu.Item onClick={signOut} color={'red'}>Log Out <ExitIcon/></DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    )
}