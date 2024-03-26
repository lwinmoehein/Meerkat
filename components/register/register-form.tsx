"use client";

import React from 'react';
import {register} from "@/app/lib/actions";
import { useFormState } from 'react-dom';
import {Flex,Card,Heading,Box,Link,TextField,Button,Text} from "@radix-ui/themes";
import {Form} from "@radix-ui/react-form";

export default function RegisterForm() {
    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(register, initialState);

   return (
       <Form action={dispatch}>
       <Box width={{ sm: '100vw',md:'maxWidth' }}>
       <Card size="4">
           <Heading as="h3" size="6" trim="start" mb="5">
               Sign up
           </Heading>
           <Box mb="3">
               <Flex mb="1">
                   <Text as="label" htmlFor="example-email-field" size="2" weight="bold">
                      Name
                   </Text>
               </Flex>
               <TextField.Root
                   placeholder="Enter your user name"
                   id="example-email-field"
                   name={"name"}
               >
               </TextField.Root>
               {state.errors?.name &&
                   state.errors.name.map((error: string,index) => (
                    <Text key={index} size={"1"} color="red">{error}</Text>
                   ))}
           </Box>
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
               {state.errors?.email &&
                   state.errors.email.map((error: string,index) => (
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
               {state.errors?.password &&
                   state.errors.password.map((error: string,index) => (
                       <Text key={index} size={"1"} color="red">{error}</Text>
                   ))}
           </Box>

           <Flex mt="6" justify="between" gap="3">
               <Link underline={"always"} href={"/login"}>
                       Sign In
               </Link>
               <Button  variant={"soft"} type={"submit"} >Register</Button>
           </Flex>
       </Card>
       </Box>
       </Form>
   );
}
