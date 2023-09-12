import { FC } from 'react'
const page = async (props: any) => {
    console.log(props)
    return <div>Hello</div>
}
export default page


// using the ...postId directory
// we can save the slug after post/postId/something/some2/some3 in an array as such
// postId: ['something', 'some2', 'some3']
