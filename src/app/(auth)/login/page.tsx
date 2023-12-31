// rendering server side component getting data
import axios from "axios"

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))


const login = async() => {
  await wait(5000)

  const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts/1')

  throw new Error('not authed')
  return <div>{JSON.stringify(data)}</div>
}

export default login