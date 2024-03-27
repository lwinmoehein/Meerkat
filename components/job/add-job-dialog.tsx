"use client";

import {Button, Box, Dialog, Flex, Text, TextField, Badge, Spinner} from "@radix-ui/themes";
import {PlusIcon} from "@radix-ui/react-icons";
import {useEffect, useState} from "react";
import {Form} from "@radix-ui/react-form";
import {useFormState} from "react-dom";
import {createJob} from "@/app/lib/actions";
import {SubmitButton} from "@/components/submit-button";


export default function AddJobDialog(){

    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(createJob, initialState);
    const [open, setOpen] = useState(false);


    const [tags,setTags] = useState<string[]>([])
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
        setTags(
            [
                ...tags,
                tag
            ]
        )
        setTag('')
    }
    return (
        <Dialog.Root  open={open} onOpenChange={setOpen}>
            <Dialog.Trigger>
                <Button variant="soft">
                    <PlusIcon /> Add New Site
                </Button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth="450px">
                <Dialog.Title>Add New Web Page</Dialog.Title>
                <Dialog.Description size="2" mb="4">
                    Add a new web page to watch changes and get notified.
                    <pre>{JSON.stringify(state)}</pre>
                </Dialog.Description>
                <Form action={dispatch}>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Name
                        </Text>
                        <TextField.Root
                            placeholder="Netflix Careers Page"
                            name={'name'}
                        />
                    </label>
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            URL
                        </Text>
                        <TextField.Root
                            name={'url'}
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
                        <input type={'hidden'} name={'tags'} value={tagsValueString}/>
                     </Flex>
                </Flex>

                <Flex gap="3" mt="4" justify="center">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </Dialog.Close>
                    <SubmitButton name={"Confirm"}/>
                </Flex>
                </Form>
            </Dialog.Content>
        </Dialog.Root>
    )
}