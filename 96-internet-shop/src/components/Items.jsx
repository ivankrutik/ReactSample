import React from 'react'
import CardItem from './CardItem'

const Items = ({ posts }) => {
  if (posts.length === 0) {
    return <h1>Data found</h1>
  }

  return (
    <main>
      {posts.map((post) => {
        return <CardItem key={post.id} {...post}></CardItem>
      })}
    </main>
  )
}

export default Items
