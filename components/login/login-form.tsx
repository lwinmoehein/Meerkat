"use client";

import React from 'react';
import {Flex,Card,Heading,Box,Link,TextField,Button,Text} from "@radix-ui/themes";
import {Form} from "@radix-ui/react-form";
import {login} from '@/app/lib/actions';
import {useFormState} from "react-dom";
import {SubmitButton} from "@/components/submit-button";
import {ArrowRightIcon} from "@radix-ui/react-icons";
export default  function LoginForm() {
    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(login, initialState);

    return (
        <Box width={{initial: '100vw', md: 'maxWidth'}}>
            <Form action={dispatch}>
                    <Card size="4">
                        <Heading as="h3" size="6" trim="start" mb="5">
                            Login
                        </Heading>
                        <Box mb="3">
                            <Flex mb="1">
                                <Text as="label" htmlFor="example-email-field" size="2" weight="bold">
                                    Email address
                                </Text>
                            </Flex>
                            <TextField.Root
                                name={"email"}
                                placeholder="Enter your email"
                                id="example-email-field"
                            />
                            {state&&state.errors?.email &&
                                state.errors.email.map((error: string, index) => (
                                    <Text key={index} size={"1"} color="red">{error}</Text>
                                ))}
                        </Box>

                        <Box mb="3" position="relative">
                            <Flex align="baseline" justify="between" mb="1">
                                <Text as="label" size="2" weight="bold" htmlFor="example-password-field">
                                    Password
                                </Text>
                            </Flex>
                            <TextField.Root
                                name={"password"}
                                placeholder="Enter your password"
                                type={"password"}
                            />
                            {state&&state.errors?.password &&
                                state.errors.password.map((error: string, index) => (
                                    <Text key={index} size={"1"} color="red">{error}</Text>
                                ))}
                        </Box>

                        <Flex mt="6" justify="between" gap="3">
                            <Link underline={"always"} href={"/register"}>
                                Register
                            </Link>
                            <SubmitButton name={'Login'}>
                                <ArrowRightIcon/>
                            </SubmitButton>
                        </Flex>
                    </Card>
            </Form>
        </Box>
    );
}
