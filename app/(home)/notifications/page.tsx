import '@radix-ui/themes/styles.css'
import {Box, Card, Link, Flex, Text} from "@radix-ui/themes";
import {getNotificationPagination} from "../../lib/actions";


export default async function Page() {
    const notificationsPagination = await getNotificationPagination()

    return(
        <Flex direction={'column'} gap={'4'}  p={"2"}>
                <Flex justify={'between'}>
                    <Text weight={'bold'}>
                        Notifications
                    </Text>
                </Flex>
                <Box maxWidth={{'initial':'100%','lg':'50%'}}>
                           <Flex direction={'column'} gap={'2'}>
                               {
                                   notificationsPagination?.data&&notificationsPagination.data.map((notification:Notification)=>
                                      <Card key={notification.id}>
                                          <Flex direction={'column'}>
                                              <Text>{notification.data.job_name}</Text>
                                              <Text>{notification.data.title}</Text>
                                              <Link href={notification.data.job_url}>{notification.data.job_url}</Link>
                                          </Flex>
                                      </Card>
                                   )
                               }
                           </Flex>
                </Box>
        </Flex>
    )
}

