import '@radix-ui/themes/styles.css'
import {getJobs} from "@/app/lib/actions";
import {Badge, Box, Button, Card, DropdownMenu, Flex, Grid, Heading, Text} from "@radix-ui/themes";
import AddJobDialog from "@/components/job/add-job-dialog";
import {DotsVerticalIcon, Pencil1Icon, TrashIcon} from "@radix-ui/react-icons";


export default async function Page() {
    const jobs = await getJobs()

  return(
      <Box  p={"2"}>
                  <Flex justify={'between'}>
                      <Heading mb={"4"}>
                          Web Pages
                      </Heading>
                      <AddJobDialog/>
                  </Flex>
                  <Grid columns={{initial:'1',md:'3'}} gap="5"  width="auto">
                      {jobs&& jobs.map((job,index)=>
                          <Card key={index}>
                              <Flex gap="3" align="center">
                                  <Box width={'100%'}>
                                      <Flex width={'100%'} justify={'between'}>
                                          <Text as="div" size="2" weight="bold">
                                              {job.name}
                                          </Text>
                                          <DropdownMenu.Root>
                                              <DropdownMenu.Trigger>
                                                  <DotsVerticalIcon/>
                                              </DropdownMenu.Trigger>
                                              <DropdownMenu.Content>
                                                  <DropdownMenu.Item>
                                                      Edit
                                                      <Pencil1Icon/>
                                                  </DropdownMenu.Item>
                                                  <DropdownMenu.Item color="red">
                                                      Delete
                                                      <TrashIcon/>
                                                  </DropdownMenu.Item>
                                              </DropdownMenu.Content>
                                          </DropdownMenu.Root>
                                      </Flex>
                                      <Text as="div" size="2" color="gray">
                                          {job.url}
                                      </Text>
                                      <Text as="div" mt={'5'} size="1" color="gray" weight={'bold'}>
                                          Tags
                                      </Text>
                                      <Flex gap={'2'} mt={'3'}>
                                          {job.tags&&job.tags.map((tag,index)=>(
                                              <Badge key={index}>{tag}</Badge>
                                          ))}
                                      </Flex>
                                  </Box>
                              </Flex>
                          </Card>
                      )}
                  </Grid>
              </Box>
  )
}

