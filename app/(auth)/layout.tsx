import '../globals.css'
import {Box, Flex, Section, Text, Theme} from "@radix-ui/themes";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
          <Section>
             <Flex  direction={'column'} gap={'3'}>
                 <Flex justify={'center'} align={'center'} gap={'1'}>
                     <Image src={'/meerkat.png'} width={'50'} height={'50'} alt={'meerkat'}/>
                     <Flex direction={'column'}>
                         <Text weight={'bold'} size={'8'}>Meerkat</Text>
                         <Text size={'1'}>Watch web pages and get notified.</Text>
                     </Flex>
                 </Flex>
                 <Flex  width={{'initial':'100%'}} justify={"center"} align={"center"}>
                     {children}
                 </Flex>
             </Flex>
          </Section>
  );
}
