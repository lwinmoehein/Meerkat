
import '@radix-ui/themes/styles.css'
import {getJobs} from "@/app/lib/actions";
import {Box,Dialog,TextField, Flex, Grid, Heading, Text, Card, Button} from "@radix-ui/themes";
import {PlusIcon} from "@radix-ui/react-icons";


export default async function Page() {
    const jobs = await getJobs()

  return(
      <Box  p={"2"}>
                  <Flex justify={'between'}>
                      <Heading mb={"4"}>
                          Jobs
                      </Heading>
                      <Dialog.Root>
                          <Dialog.Trigger>
                              <Button variant="soft">
                                  <PlusIcon /> Add New Site
                              </Button>
                          </Dialog.Trigger>

                          <Dialog.Content maxWidth="450px">
                              <Dialog.Title>Add New Web Page</Dialog.Title>
                              <Dialog.Description size="2" mb="4">
                                  Add a new web page to watch changes and get notified.
                              </Dialog.Description>

                              <Flex direction="column" gap="3">
                                  <label>
                                      <Text as="div" size="2" mb="1" weight="bold">
                                          Name
                                      </Text>
                                      <TextField.Root
                                          placeholder="Netflix Careers Page"
                                      />
                                  </label>
                                  <label>
                                      <Text as="div" size="2" mb="1" weight="bold">
                                          URL
                                      </Text>
                                      <TextField.Root
                                          placeholder="https://netflix.com/careers"
                                      />
                                  </label>
                              </Flex>

                              <Flex gap="3" mt="4" justify="end">
                                  <Dialog.Close>
                                      <Button variant="soft" color="gray">
                                          Cancel
                                      </Button>
                                  </Dialog.Close>
                                  <Dialog.Close>
                                      <Button>Add</Button>
                                  </Dialog.Close>
                              </Flex>
                          </Dialog.Content>
                      </Dialog.Root>
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

