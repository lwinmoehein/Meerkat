"use client";

import {Badge, Box, Card, DropdownMenu, Flex, Link, Separator, Text} from "@radix-ui/themes";
import {CheckCircledIcon, DotsVerticalIcon, MinusCircledIcon, Pencil1Icon, TrashIcon} from "@radix-ui/react-icons";
import {deleteJob} from "@/app/lib/actions";
import EditJobDialog from "@/components/job/edit-job-dialog";
import React, {useState} from "react";


export default function JobItem({job}:{job:Job}){
    const removeJob = async ()=>{
        await deleteJob(job.id)
    }

    const [isDropdownOpen,setIsDropdownOpen] = useState(false)

    return (
        <Card>
            <Flex gap="3" align="center">
                <Box width={'100%'}>
                    <Flex width={'100%'} justify={'between'}>
                        <Text as="div" size="2" weight="bold">
                            {job.name}
                        </Text>
                        <DropdownMenu.Root open={isDropdownOpen}>
                            <DropdownMenu.Trigger onClick={()=>setIsDropdownOpen(true)}>
                                <DotsVerticalIcon/>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content>
                                <DropdownMenu.Item onClick={removeJob} color="red">
                                    <Flex width={'100%'} justify={'between'} align={'center'}>
                                        <Text>Delete</Text>
                                        <TrashIcon/>
                                    </Flex>
                                </DropdownMenu.Item>
                                <EditJobDialog job={job} closeDropDown={()=>setIsDropdownOpen(false)}/>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    </Flex>
                    {job.is_active?<Flex gap={'1'} justify={'start'} align={'center'}>
                            <Text color={'green'} size={'1'}>Active</Text>
                            <CheckCircledIcon color={'#46A758'}/>
                        </Flex>:
                        <Flex gap={'1'} justify={'start'} align={'center'}>
                            <Text color={'gray'} size={'1'}>Inactive</Text>
                            <MinusCircledIcon/>
                        </Flex>
                    }
                    <Badge>{job.last_tag_count} Tag Matches</Badge>
                    <Text mt={'3'} as="div" size="2" color="gray">
                        <Link href={job.url}>{job.url}</Link>
                    </Text>
                    <Text as="div" mt={'5'} size="1" color="gray" weight={'bold'}>
                        Tags
                    </Text>
                    <Flex mt={'3'} gap="3" align="center">
                        {job.tags&&job.tags.map((tag,index)=>(
                            <Flex justify={'center'} gap={'3'} align={'center'}  key={index}>
                                <Text size={'1'} color={'sky'}>
                                    {tag}
                                </Text>
                                {index!==job.tags.length-1&&<Separator orientation="vertical" />}
                            </Flex>
                        ))}
                    </Flex>
                </Box>
            </Flex>
        </Card>
    )
}