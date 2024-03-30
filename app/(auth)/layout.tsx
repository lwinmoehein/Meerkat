import '../globals.css'
import {Box, Flex, Section, Theme} from "@radix-ui/themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
          <Section>
              <Flex p={{'initial':'3','md':'0'}} width={{'initial':'100%'}} justify={"center"} align={"center"}>
                  {children}
              </Flex>
          </Section>
  );
}
