import {Flex, Heading} from "@radix-ui/themes";
import {Profile} from "@/components/Profile";
import {TabNavigation} from "@/components/TabNavigation";


export default function NavBar(){

    return (
        <Flex direction={'column'}>
            <Flex p={'2'} maxHeight={'80px'} justify={'between'} align={'center'}>
                <Heading>Meerkat</Heading>
                <Profile/>
            </Flex>
            <TabNavigation/>
        </Flex>

    )
}