import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {cookies} from "next/headers";
import {jwtVerify} from "jose";

export async  function middleware(request: NextRequest) {
    const SECRET_KEY = process.env.JWT_SECRET;
    const token = cookies().get("access_token")

    if(token?.value===undefined || SECRET_KEY===null){
        return NextResponse.redirect(new URL('/login', request.url))
    }
    try{
        const secret = new TextEncoder().encode(SECRET_KEY)
        const payload =   await jwtVerify(token.value, secret);
        return NextResponse.next()
    }catch (error){
        return NextResponse.redirect(new URL('/login', request.url))
    }
}


export const config = {
    matcher:  ['/home/:path*','/']
}