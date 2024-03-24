import './globals.css'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import NavBar from "@/components/NavBar";


export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
        <body>
        <Theme accentColor="red">
            <div>

                <NavBar/>
                <main className="flex flex-col justify-center items-center min-h-screen px-4 py-16 space-y-8">
                    {children}
                </main>

                <footer className="text-center text-gray-500 py-4">
                    &copy; 2024 Lwin Moe Hein
                </footer>
            </div>
        </Theme>
        </body>
        </html>
    )
        ;
}
