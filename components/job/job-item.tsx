"use client";

import {Badge, Box, Card, DropdownMenu, Flex, Text} from "@radix-ui/themes";
import {DotsVerticalIcon, TrashIcon} from "@radix-ui/react-icons";
import {deleteJob} from "@/app/lib/actions";


export default function JobItem({job}:{job:Job}){
    const removeJob = async ()=>{
        await deleteJob(job.id)
    }
    return (
        <Card>
            <Flex gap="3" align="center">
                <Box width={'100%'}>
                    <Flex width={'100%'} justify={'between'}>
                        <Text as="div" size="2" weight="bold">
                            {job.name}
                        </Text>
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                <DotsVerticalIcon/>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content>
                                <DropdownMenu.Item onClick={removeJob} color="red">
                                    Delete
                                    <TrashIcon/>
                                </DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    </Flex>
                    <Text as="div" size="2" color="gray">
                        {job.url}
                    </Text>
                    <Text as="div" mt={'5'} size="1" color="gray" weight={'bold'}>
                        Tags
                    </Text>
                    <Flex gap={'2'} mt={'3'}>
                        {job.tags&&job.tags.map((tag,index)=>(
                            <Badge key={index}>{tag}</Badge>
                        ))}
                    </Flex>
                </Box>
            </Flex>
        </Card>
    )
}