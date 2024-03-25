"use server";

import { z } from 'zod';
import axios from 'axios';
import {redirect} from "next/navigation";

export type State = {
    errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
    };
    message?: string | null;
};


const FormSchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string()
});

const Register = FormSchema;


export async function register(prevState: State,formData:FormData){
    const validatedFields = Register.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        };
    }
    try{
        const response = await axios.post(`${process.env.API_URL}/auth/register`,validatedFields.data)
        if(response.status!==201){
            return {
                errors: ["Cannot create user"],
                message: 'Error creating user.',
            };
        }
    }catch (error) {
        return {
            errors: ["Cannot create user"],
            message: 'Error creating user.',
        };
    }

    redirect('/login');
}