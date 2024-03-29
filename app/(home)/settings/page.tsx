import '@radix-ui/themes/styles.css'
import {Box, Card, DataList, Flex, SegmentedControl, Text} from "@radix-ui/themes";
import {getUser, updateNotificationSetting} from "../../lib/actions";
import NotificationControl from "@/components/settings/notification-control";


export default async function Page() {
    const user = await getUser()



    return(
        <Flex direction={'column'} gap={'4'}  p={"2"}>
                <Flex justify={'between'}>
                    <Text weight={'bold'}>
                        Settings
                    </Text>
                </Flex>
            {user&&(
                <>
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
                                        <SegmentedControl.Root size={'1'}  radius={'full'} defaultValue={user?.notification?"enabled":"disabled"}>
                                            <NotificationControl user={user} type={"enabled"}/>
                                            <NotificationControl user={user} type={"disabled"}/>
                                        </SegmentedControl.Root>
                                    </DataList.Value>
                                </DataList.Item>
                            </DataList.Root>
                        </Card>
                    </Box>
                </>
            )}
        </Flex>
    )
}

