import '@radix-ui/themes/styles.css';
import './globals.css'
import { Theme } from '@radix-ui/themes';
import NavBar from "@/components/NavBar";
import { SessionProvider } from "next-auth/react"


export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
        <body>
        <Theme accentColor="green" appearance={"dark"}>
                    {children}
        </Theme>
        </body>
        </html>
    );
}
