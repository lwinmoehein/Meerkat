import '@radix-ui/themes/styles.css'
import {getJobs} from "@/app/lib/actions";
import {Badge, Box, Card, Flex, Grid, Heading, Text} from "@radix-ui/themes";
import AddJobDialog from "@/components/job/add-job-dialog";


export default async function Page() {
    const jobs = await getJobs()

  return(
      <Box  p={"2"}>
                  <Flex justify={'between'}>
                      <Heading mb={"4"}>
                          Jobs
                      </Heading>
                      <AddJobDialog/>
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
