import {Flex, Heading} from "@radix-ui/themes";
import {Profile} from "@/components/Profile";
import {TabNavigation} from "@/components/TabNavigation";
import {getUser} from "@/app/lib/actions";


export default async function NavBar(){

    const user = await getUser()
    return (
        <Flex direction={'column'}>
            <Flex p={'2'} maxHeight={'80px'} justify={'between'} align={'center'}>
                <Heading>Meerkat</Heading>
                {user&&<Profile user={user}/>}
            </Flex>
            <TabNavigation/>
        </Flex>

    )
}