// rendering server side component getting data

import axios from "axios"
const login = async() => {
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts/1')

  return <div>{JSON.stringify(data)}</div>
}

export default login