'use client'

import { useFormStatus } from 'react-dom'
import {Button, Spinner} from "@radix-ui/themes";
import {CheckIcon} from "@radix-ui/react-icons";

export function SubmitButton({ name }:{name:string}) {
    const { pending } = useFormStatus()

    return (
        <Button type={"submit"} aria-disabled={pending}>
            <Spinner loading={pending}>
                <CheckIcon/>
            </Spinner>
            {name}
        </Button>
    )
}