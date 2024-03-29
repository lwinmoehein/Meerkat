"use client";

import {Badge, Box, Button, Card, Dialog, DropdownMenu, Flex, Text, TextField} from "@radix-ui/themes";
import {CheckIcon, Pencil1Icon, PlusIcon, TrashIcon} from "@radix-ui/react-icons";
import React, {useEffect, useState} from "react";
import {Form} from "@radix-ui/react-form";
import {useFormState} from "react-dom";
import { updateJob} from "@/app/lib/actions";
import {SubmitButton} from "@/components/submit-button";


export default function EditJobDialog({job}:{job:Job}){

    const initialState = { message: null, errors: {} };

    const [state, dispatch] = useFormState(updateJob, initialState);
    const [open, setOpen] = useState(false);


    const [tags,setTags] = useState<string[]>(job.tags)
    const [tagsValueString,setTagsValueString] = useState("")
    const [tag,setTag] = useState("")


    const tagItems =  tags.map((t,index)=>
        <Box key={index} >
            <Badge >{t}</Badge>
        </Box>
    );

    useEffect(() => {
        if(state.message==="Success"){
            setOpen(false)
            setTags([])
        }
    }, [state.message]);

    useEffect(() => {
        setTagsValueString("")
        tags.map((t,index)=> {
            if (tagsValueString !== "")
                setTagsValueString(tagsValueString + "," + t)
            else
                setTagsValueString(t)
        });
    },[tags])

    const addToTags = (e:any)=>{
        e.preventDefault()
        if(tag==null || tag=="") return
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
                <DropdownMenu.Item onSelect={e=>e.preventDefault()}>
                    <Flex width={'100%'} justify={'between'} align={'center'}>
                        <Text>Edit</Text>
                        <Pencil1Icon/>
                    </Flex>
                </DropdownMenu.Item>
            </Dialog.Trigger>
            <Dialog.Content maxWidth="450px">
                <Dialog.Title>Edit {job.name}</Dialog.Title>
                <Form action={dispatch}>
                <Flex direction="column" gap="3">
                    <label>
                        <Flex justify={'between'}>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Name
                            </Text>
                            {state.errors?.name&&state.errors.name.map((error,index)=>
                                <Text key={index} as="div" color={'red'} size="2" my="1" >
                                    {error}
                                </Text>
                            )}
                        </Flex>

                        <TextField.Root
                            placeholder="Netflix Careers Page"
                            name={'name'}
                            value={job.name}
                        />
                    </label>
                    <label>
                        <Flex justify={'between'}>
                            <Text as="div" size="2" mb="1" weight="bold">
                                URL
                            </Text>
                            {state.errors?.url&&state.errors.url.map((error,index)=>
                                <Text key={index} as="div" color={'red'} size="2" my="1" >
                                    {error}
                                </Text>
                            )}
                        </Flex>

                        <TextField.Root
                            name={'url'}
                            placeholder="https://netflix.com/careers"
                            value={job.url}
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
                    <Flex justify={'between'}>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Added Tags
                        </Text>
                        {state.errors?.tags&&state.errors.tags.map((error,index)=>
                            <Text key={index} as="div" color={'red'} size="2" my="1" >
                                {error}
                            </Text>
                        )}
                    </Flex>
                    <Box>
                        <Card>
                            {tags.length>0&&
                                <Flex minHeight={'50px'} direction={'row'} gap={'2'}>
                                    {
                                        tagItems
                                    }
                                    <input type={'hidden'} name={'tags'} value={tagsValueString}/>
                                </Flex>
                            }
                            {tags.length===0&&
                                <Flex minHeight={'50px'} justify={'center'} align={'center'}>
                                    <Text as="div" size="2" mb="1" weight="bold">
                                        No tags were added yet.
                                    </Text>
                                </Flex>
                            }
                        </Card>
                    </Box>
                </Flex>

                <Flex gap="3" mt="4" justify="center">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </Dialog.Close>
                    <SubmitButton name={'Confirm'}>
                        <CheckIcon/>
                    </SubmitButton>
                </Flex>
                </Form>
            </Dialog.Content>
        </Dialog.Root>
    )
}