
import '@radix-ui/themes/styles.css'
import {getJobs, getToken, getUser} from "@/app/lib/actions";


export default async function Page() {
    const jobs = await getJobs()

  return(
      <div>
          {jobs&& jobs.map((job,index)=>
              <span key={index}>{job.name}</span>
          )}
      </div>
  )
}

