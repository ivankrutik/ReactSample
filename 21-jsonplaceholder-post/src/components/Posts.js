import { useEffect, useState } from 'react'
import Post from './Post'

function Posts() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setPosts(json)
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => setIsLoading(false))
  }, [])

  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <>
      <h1>Posts</h1>
      <hr />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        posts &&
        posts.map((post) => {
          return <Post key={post.id} {...post} />
        })
      )}
    </>
  )
}

export default Posts
