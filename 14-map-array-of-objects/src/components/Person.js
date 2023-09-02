function Person(props) {
  return (
    <div className="card">
      <img src={props.image}></img>
      <h3>
        {props.firstName} {props.lastName}
      </h3>
      <h4>{props.email}</h4>
    </div>
  )
}

export default Person
