
import '@radix-ui/themes/styles.css'
import {getJobs} from "@/app/lib/actions";
import {Box,Dialog,TextField, Flex, Grid, Heading, Text, Card, Button} from "@radix-ui/themes";
import {PlusIcon} from "@radix-ui/react-icons";
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
                                  </Box>
                              </Flex>
                          </Card>
                      )}
                  </Grid>
              </Box>
  )
}

