import '../globals.css'
import {Box, Flex, Section, Theme} from "@radix-ui/themes";
import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <Flex p={{'initial':'0','md':'5'}} direction={'column'}>
          <Box mb={'5'}>
              <NavBar/>
          </Box>
          <Box>{children}</Box>
      </Flex>
  );
}
