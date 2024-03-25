"use client"

import React from 'react';
import * as Form from '@radix-ui/react-form';
import {Button, Flex} from "@radix-ui/themes";
import {register} from "@/app/lib/actions";
import { useFormState, useFormStatus } from 'react-dom';
export default function FormDemo() {
    const [errorMessage, dispatch] = useFormState(register, undefined);

   return (<Form.Root className="w-full" action={dispatch}>
        <Form.Field className="grid mb-[10px]" name="name">
            <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] ">Name</Form.Label>
                <Form.Message className="text-[13px]  opacity-[0.8]" match="valueMissing">
                    Please enter your name
                </Form.Message>
                <Form.Message className="text-[13px]  opacity-[0.8]" match="typeMismatch">
                    Please provide a valid user name
                </Form.Message>
            </div>
            <Form.Control asChild>
                <input
                    className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none  shadow-[0_0_0_1px] outline-none  selection:color-white selection:bg-blackA6"
                    type="text"
                    required
                    name={"name"}
                />
            </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[10px]" name="email">
            <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] ">Email</Form.Label>
                <Form.Message className="text-[13px]  opacity-[0.8]" match="valueMissing">
                    Please enter your email
                </Form.Message>
                <Form.Message className="text-[13px]  opacity-[0.8]" match="typeMismatch">
                    Please provide a valid email
                </Form.Message>
            </div>
            <Form.Control asChild>
                <input
                    className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none  shadow-[0_0_0_1px] outline-none  selection:color-white selection:bg-blackA6"
                    type="email"
                    required
                    name={"email"}
                />
            </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[30px]" name="email">
            <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] ">Password</Form.Label>
                <Form.Message className="text-[13px]  opacity-[0.8]" match="valueMissing">
                    Please enter your password
                </Form.Message>
                <Form.Message className="text-[13px]  opacity-[0.8]" match="typeMismatch">
                    Please provide a valid password
                </Form.Message>
            </div>
            <Form.Control asChild>
                <input
                    className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none  shadow-[0_0_0_1px] outline-none  selection:color-white selection:bg-blackA6"
                    type="password"
                    required
                    name={"password"}
                />
            </Form.Control>
        </Form.Field>
        <Flex justify={"end"}>
            <Form.Submit asChild>
                <Button className={"w-full"}>Register</Button>
            </Form.Submit>
        </Flex>
    </Form.Root>);
}
