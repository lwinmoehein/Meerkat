import {Card, Flex, Text} from "@radix-ui/themes";
import {InfoCircledIcon} from "@radix-ui/react-icons";
import React from "react";

export default async function EmptyPlaceholder({message}:{message:string}){
    return (
        <Card>
            <Flex minHeight={'200px'} justify={'center'} align={'center'}>
                <Flex direction={{'initial':'column','md':'row'}} gap={{'initial':'3','md':'2'}} align={'center'}>
                    <InfoCircledIcon fontSize={'5'}/>
                    <Text size={'2'}>{message}</Text>
                </Flex>
            </Flex>
        </Card>
    )
}