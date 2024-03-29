import '@radix-ui/themes/styles.css'
import {Box, Card, Link, Flex, Text, Blockquote, Badge} from "@radix-ui/themes";
import {getNotificationPagination} from "../../../lib/actions";
import NotificationPaginator from "@/components/job/notification-paginator";
import {BellIcon, InfoCircledIcon} from "@radix-ui/react-icons";
import React from "react";
import EmptyPlaceholder from "@/components/empty-placeholder";


export default async function Page({ params }: { params: { page: number } }) {
    const notificationsPagination = await getNotificationPagination(params.page)


    return(
        <Flex direction={'column'} gap={'4'}  p={"2"}>
                <Flex justify={'between'}>
                    <Text weight={'bold'}>
                        Notifications
                    </Text>
                </Flex>
                <Box maxWidth={{'initial':'100%','lg':'50%'}}>
                            <Flex>
                                {
                                    notificationsPagination&&notificationsPagination.data.length>0&&<NotificationPaginator pagination={notificationsPagination}/>
                                }
                            </Flex>
                           <Flex direction={'column'} gap={'2'}>
                               {
                                   notificationsPagination?.data&&notificationsPagination.data.map((notification:Notification)=>
                                      <Card key={notification.id}>
                                          <Flex direction={'column'}>
                                              <Flex mb={'2'} gap={'2'} justify={'start'} align={'center'}>
                                                  <BellIcon/>
                                                  <Text weight={'bold'}>{notification.data.job_name}</Text>
                                                  <Badge>{notification.data.job_last_tag_count} Tag Matches</Badge>
                                              </Flex>
                                              <Text size={'2'}>
                                                  {notification.data.title}</Text>
                                              <Text>
                                                  <Text size={'1'}>Page Link :</Text> <Link size={'1'} href={notification.data.job_url}>{notification.data.job_url}</Link>
                                              </Text>
                                          </Flex>
                                      </Card>
                                   )
                               }
                           </Flex>
                            {
                                (notificationsPagination==null||notificationsPagination.data.length==0)&&<EmptyPlaceholder message={"No notifications were found."}/>
                            }
                </Box>
        </Flex>
    )
}

