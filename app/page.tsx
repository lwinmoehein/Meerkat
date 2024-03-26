
import '@radix-ui/themes/styles.css'
import {getToken, getUser} from "@/app/lib/actions";


export default async function Page() {
    const token = await getToken()
    const user = await  getUser()



  return(
      <div>
        {token&&<pre>{JSON.stringify(token)}</pre>}
          <hr/>
          {user&&<pre>{user.email}</pre>}
      </div>
  )
}

