"use client";

import {Button, Box, Dialog, Flex, Text, TextField, Badge} from "@radix-ui/themes";
import {PlusIcon} from "@radix-ui/react-icons";
import {useState} from "react";

export default function AddJobDialog(){
    const [tags,setTags] = useState<string[]>([])
    const [tag, setTag] = useState('');

    const tagItems =  tags.map((t,index)=>
        <Badge key={index} >{t}</Badge>
    );

    const addToTags = ()=>{
        setTags(
            [
                ...tags,
                tag
            ]
        )
        setTag('')
    }
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button variant="soft">
                    <PlusIcon /> Add New Site
                </Button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth="450px">
                <Dialog.Title>Add New Web Page</Dialog.Title>
                <Dialog.Description size="2" mb="4">
                    Add a new web page to watch changes and get notified.
                </Dialog.Description>

                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Name
                        </Text>
                        <TextField.Root
                            placeholder="Netflix Careers Page"
                        />
                    </label>
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            URL
                        </Text>
                        <TextField.Root
                            placeholder="https://netflix.com/careers"
                        />
                    </label>
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Add Tag
                        </Text>
                        <Flex justify={'between'} gap={'3'}>
                            <Box width={'100%'}>
                                <TextField.Root
                                    placeholder="PHP"
                                    value={tag}
                                    onChange={e => setTag(e.target.value)}
                                />
                            </Box>
                            <Button onClick={addToTags}>Add</Button>
                        </Flex>
                    </label>
                    <Text as="div" size="2" mb="1" weight="bold">
                        Added Tags
                    </Text>
                    <Flex direction={'row'} gap={'2'}>
                        {
                           tagItems
                        }
                    </Flex>
                </Flex>

                <Flex gap="3" mt="4" justify="center">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <Button>Confirm</Button>
                    </Dialog.Close>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    )
}