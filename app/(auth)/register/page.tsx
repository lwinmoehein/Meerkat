import '@radix-ui/themes/styles.css'
import {Button, Flex,Text} from "@radix-ui/themes";


export default function Page() {
    return (
        <div>
            <Flex direction="column" gap="2">
                <Text>Hello from Radix Themes :)</Text>
                <Button>Les go</Button>
            </Flex>
        </div>
    );
}

