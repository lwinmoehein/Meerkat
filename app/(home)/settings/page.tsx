import '@radix-ui/themes/styles.css'
import {
    Badge,
    Box,
    Card,
    Code,
    DataList,
    Flex,
    Heading,
    IconButton,
    Link,
    SegmentedControl,
    Text
} from "@radix-ui/themes";
import {CopyIcon} from "@radix-ui/react-icons";
import {getUser} from "../../lib/actions";


export default async function Page() {
    const user =await getUser()

    return(
        <Flex direction={'column'} gap={'4'}  p={"2"}>
                <Flex justify={'between'}>
                    <Text weight={'bold'}>
                        Settings
                    </Text>
                </Flex>
                <Box maxWidth={{'initial':'100%','lg':'50%'}}>
                    <Card>
                           <DataList.Root>
                               <DataList.Item>
                                   <DataList.Label minWidth="88px">User Name</DataList.Label>
                                   <DataList.Value>{user?.name}</DataList.Value>
                               </DataList.Item>
                               <DataList.Item>
                                   <DataList.Label minWidth="88px">Email</DataList.Label>
                                   <DataList.Value>
                                       {user?.email}
                                   </DataList.Value>
                               </DataList.Item>
                           </DataList.Root>

                    </Card>
                </Box>
                <Box maxWidth={{'initial':'100%','lg':'50%'}}>
                    <Card>
                        <DataList.Root>
                            <DataList.Item align="center">
                                <DataList.Label minWidth="88px">Email Notifications</DataList.Label>
                                <DataList.Value>
                                    <SegmentedControl.Root size={'1'}  radius={'full'} defaultValue="inbox">
                                        <SegmentedControl.Item value="inbox">Enabled</SegmentedControl.Item>
                                        <SegmentedControl.Item value="drafts">Disabled</SegmentedControl.Item>
                                    </SegmentedControl.Root>
                                </DataList.Value>
                            </DataList.Item>
                        </DataList.Root>
                    </Card>
                </Box>
        </Flex>
    )
}

