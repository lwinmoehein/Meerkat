'use client'

import { useFormStatus } from 'react-dom'
import {Button, Spinner} from "@radix-ui/themes";
import React from "react";

export function SubmitButton({ name,children }:{name:string,children:React.ReactNode}) {
    const { pending } = useFormStatus()

    return (
        <Button type={"submit"} aria-disabled={pending}>
            {name}
            <Spinner loading={pending}>
                {children}
            </Spinner>
        </Button>
    )
}