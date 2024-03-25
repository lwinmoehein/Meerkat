import '@radix-ui/themes/styles.css'
import {auth} from "@/auth";


export default async function Page() {
  const session = await auth()

  return(
      <div>
        {session&&session.user && <p>{session.user.name}</p>}
      </div>
  )
}
