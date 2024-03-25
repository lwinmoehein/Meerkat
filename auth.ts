import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import axios from "axios";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    pages: {
        signIn: '/login'
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {
                const { data,status } = await axios.post(`${process.env.API_URL}/auth/login`,credentials)
                if (status===200) {
                    return data.user
                } else {
                    return null
                }
            }
        })
    ],
})