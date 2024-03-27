"use server";

import { z } from 'zod';
import axios from 'axios';
import {redirect} from "next/navigation";
import jwt from 'next-auth/jwt'
import {cookies} from "next/headers";
import {revalidatePath} from "next/cache";


export type RegisterState = {
    errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
    };
    message?: string | null;
};
export type LoginState = {
    errors?: {
        email?: string[];
        password?: string[];
    };
    message?: string | null;
};

export type CreateJobState = {
    errors?: {
        name?: string[];
        url?: string[];
        tags?:string[];
    };
    message?: string | null;
};

const Register = z.object({
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

const Login = z.object({
    email: z.string({
        invalid_type_error:"Please enter a valid email."
    }).email("Email is not valid."),
    password: z.string({
        invalid_type_error:"Please enter a valid password."
    })
});

const CreateJob = z.object({
    name: z.string({
        invalid_type_error:"Invalid name",
        required_error:"Invalid name"
    }).min(3,"Invalid name").max(30,"Invalid name"),
    url: z.string().url(
        "Invalid URL"
    ).max(255,"Invalid URL"),
    tags: z.array(z.string().max(255,"Invalid tags"),{
        invalid_type_error:"Invalid tags",
        required_error:"Invalid tags"
    })
});

export async function createJob(prevState: CreateJobState, formData: FormData):Promise<CreateJobState>{
    const token = cookies().get("access_token")

    const validatedFields = CreateJob.safeParse({
        name: formData.get('name'),
        url: formData.get('url'),
        tags: formData.get('tags')?.toString().split(","),
    });


    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors
        };
    }
    try{
        const response = await axios.post(`${process.env.API_URL}/jobs`,validatedFields.data,
            {
                headers:{
                    'Authorization':`Bearer ${token?.value}`
                }
            })
        if(response.status!==204){
            return {
                message: 'Error adding a new site.'
            };
        }
    }catch (error) {
        return {
            message: 'Error adding a new site.'
        };
    }
    revalidatePath('/');
    return {
        message: 'Success'
    };
}


export async function register(prevState: RegisterState, formData: FormData):Promise<RegisterState> {

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

export async function login(prevState: LoginState, formData: FormData):Promise<LoginState> {

    const validatedFields = Login.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    });


    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Login User.',
        };
    }
    try{
        const { data,status } = await axios.post(`${process.env.API_URL}/auth/login`,validatedFields.data)
        if (status===200) {
            const user = data.user
            const token = data.token

            cookies().set('access_token', token)
            cookies().set('user', JSON.stringify(user))
        }
    }catch (error) {
        return {
            message: 'Error logging in user.'
        };
    }

    redirect('/');
}

export async function getJobs(){
    try{
        const token = cookies().get("access_token")

        const { data,status } = await axios.get(`${process.env.API_URL}/jobs`,{
            headers:{
                'Authorization':`Bearer ${token?.value}`
            }
        })
        if (status===200) {
            const jobs:Job[] = data.data
            return jobs;
        }
    }catch (error) {
        return null;
    }
}
export async function getToken(){
    const token = cookies().get("access_token")
    return token?.value
}
export async function getUser(){
    const user = cookies().get("user")
    return user==undefined?null:JSON.parse(user.value)
}
export async function signOut(){
    cookies().set('access_token', "")
    cookies().set('user', JSON.stringify(""))
}
