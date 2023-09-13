import './Post.css'

function Post(props) {
  return (
    <div className="post">
      <small>{props.id}</small>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <h3>User Id: {props.userId}</h3>
    </div>
  )
}

export default Post
