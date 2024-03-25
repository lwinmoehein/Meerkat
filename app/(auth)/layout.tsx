import '../globals.css'
import {Box, Flex, Section, Theme} from "@radix-ui/themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
          <Section>
              <Flex justify={"center"} align={"center"}>
                  {children}
              </Flex>
          </Section>
  );
}
