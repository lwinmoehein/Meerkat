import '@radix-ui/themes/styles.css'
import {deleteJob, getJobs, getUser} from "@/app/lib/actions";
import {Badge, Box, Button, Card, DropdownMenu, Flex, Grid, Heading, Text} from "@radix-ui/themes";
import AddJobDialog from "@/components/job/add-job-dialog";
import {DotsVerticalIcon, InfoCircledIcon, Pencil1Icon, TrashIcon} from "@radix-ui/react-icons";
import JobItem from "@/components/job/job-item";
import EmptyPlaceholder from "@/components/empty-placeholder";


export default async function Page() {
    const jobs = await getJobs()
    const user = await getUser()

  return(
      <Box  p={"2"}>
                  <Flex justify={'between'}>
                      <Text weight={'bold'} mb={"4"}>
                          Web Pages
                      </Text>
                      <AddJobDialog user={user}/>
                  </Flex>
                  {jobs&&jobs.length>0&& <Grid columns={{initial:'1',md:'3'}} gap="5"  width="auto">
                      {jobs&& jobs.map((job,index)=>
                          <JobItem key={job.id} job={job}/>
                      )}
                  </Grid>}

                  {
                      (jobs==null||jobs.length==0)&&<EmptyPlaceholder message={"No web pages were added yet. Please click 'Add New Page' button to add one"}/>
                  }
              </Box>
  )
}

