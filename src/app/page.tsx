import { AuthRequiredError } from "./lib/exceptions"

const session = null

export default function Home() {

    if(!session) throw new AuthRequiredError()
    
    return <main>
        
        This is the auth-only page</main>
}