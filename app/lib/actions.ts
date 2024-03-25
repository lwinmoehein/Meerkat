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
    name: z.string({
        invalid_type_error:"Please enter a valid user name."
    }).max(30,"User name must not exceed more than 30 characters.").min(3,"User name must have at least 3 characters."),
    email: z.string({
        invalid_type_error:"Please enter a valid email."
    }).email("Email is not valid."),
    password: z.string({
        invalid_type_error:"Please enter a valid password."
    }).min(4,"Password must have at least 4 characters.").max(30,"Password shouldn't exceed 30 characters.")
});

const Register = FormSchema;


export async function register(prevState: State, formData: FormData):Promise<State> {

    const validatedFields = Register.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    });


    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Register User.',
        };
    }
    try{
        const response = await axios.post(`${process.env.API_URL}/auth/register`,validatedFields.data)
        if(response.status!==201){
            return {
                message: 'Error creating user.',
                errors:{
                    email:["Email already taken."]
                }
            };
        }
    }catch (error) {
        return {
            message: 'Error creating user.',
            errors:{
                email:["Email already taken."]
            }
        };
    }

    redirect('/login');
}