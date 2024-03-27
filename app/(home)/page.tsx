import '@radix-ui/themes/styles.css'
import {deleteJob, getJobs} from "@/app/lib/actions";
import {Badge, Box, Button, Card, DropdownMenu, Flex, Grid, Heading, Text} from "@radix-ui/themes";
import AddJobDialog from "@/components/job/add-job-dialog";
import {DotsVerticalIcon, InfoCircledIcon, Pencil1Icon, TrashIcon} from "@radix-ui/react-icons";
import JobItem from "@/components/job/job-item";


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
                  {jobs&&jobs.length>0&& <Grid columns={{initial:'1',md:'3'}} gap="5"  width="auto">
                      {jobs&& jobs.map((job,index)=>
                          <JobItem key={job.id} job={job}/>
                      )}
                  </Grid>}

                  {
                      (jobs==null||jobs.length==0)&&
                      <Card>
                          <Flex minHeight={'200px'} justify={'center'} align={'center'}>
                              <Flex align={'center'} gap={'1'}>
                                  <InfoCircledIcon/>
                                  <Text>No web pages were created yet.</Text>
                              </Flex>
                          </Flex>
                      </Card>
                  }
              </Box>
  )
}

