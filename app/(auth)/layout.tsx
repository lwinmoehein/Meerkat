import '../globals.css'
import { Theme} from "@radix-ui/themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
          <div className="flex items-center justify-center">
              {children}
          </div>
  );
}
