
import '@radix-ui/themes/styles.css'
import {getJobs} from "@/app/lib/actions";
import {Box, Flex, Grid, Heading, Text, Card, Button} from "@radix-ui/themes";
import {PlusIcon} from "@radix-ui/react-icons";


export default async function Page() {
    const jobs = await getJobs()

  return(
      <Box  p={"2"}>
                  <Flex justify={'between'}>
                      <Heading mb={"4"}>
                          Jobs
                      </Heading>
                      <Button variant="soft">
                          <PlusIcon /> Add New Site
                      </Button>
                  </Flex>
                  <Grid columns={{initial:'1',md:'4'}} gap="3"  width="auto">
                      {jobs&& jobs.map((job,index)=>
                          <Card key={index}>
                              <Flex gap="3" align="center">
                                  <Box>
                                      <Text as="div" size="2" weight="bold">
                                          {job.name}
                                      </Text>
                                      <Text as="div" size="2" color="gray">
                                          {job.url}
                                      </Text>
                                  </Box>
                              </Flex>
                          </Card>
                      )}
                  </Grid>
              </Box>
  )
}

