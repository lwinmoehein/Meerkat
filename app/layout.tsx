import '@radix-ui/themes/styles.css';
import './globals.css'
import { Theme } from '@radix-ui/themes';
import NavBar from "@/components/NavBar";


export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
        <body>
        <Theme accentColor="green" appearance={"dark"}>
            <div>

                <NavBar/>
                <main>
                    {children}
                </main>

                <footer>

                </footer>
            </div>
        </Theme>
        </body>
        </html>
    )
        ;
}
