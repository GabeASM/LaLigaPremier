import React from 'react'
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';


const Post = () => {

    const params = useParams()
    const  {data, error, loading} = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    if (loading) {
        return <h2>loading...</h2>;
      }
    
      if (error !== "") {
        return <h2>{error}</h2>;
      }
  return (
    <div>Post id: {data.id} - {data.title}</div>
  )
}

export default Post