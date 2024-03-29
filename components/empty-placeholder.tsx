import {Card, Flex, Text} from "@radix-ui/themes";
import {InfoCircledIcon} from "@radix-ui/react-icons";
import React from "react";

export default async function EmptyPlaceholder({message}:{message:string}){
    return (
        <Card>
            <Flex minHeight={'200px'} justify={'center'} align={'center'}>
                <Flex align={'center'} gap={'1'}>
                    <InfoCircledIcon/>
                    <Text>{message}</Text>
                </Flex>
            </Flex>
        </Card>
    )
}