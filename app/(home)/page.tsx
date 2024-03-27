import '@radix-ui/themes/styles.css'
import {deleteJob, getJobs} from "@/app/lib/actions";
import {Badge, Box, Button, Card, DropdownMenu, Flex, Grid, Heading, Text} from "@radix-ui/themes";
import AddJobDialog from "@/components/job/add-job-dialog";
import {DotsVerticalIcon, Pencil1Icon, TrashIcon} from "@radix-ui/react-icons";
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
                  <Grid columns={{initial:'1',md:'3'}} gap="5"  width="auto">
                      {jobs&& jobs.map((job,index)=>
                          <JobItem key={job.id} job={job}/>
                      )}
                  </Grid>
              </Box>
  )
}

