function Wrapper(porps) {
  const wrapperStyle = {
    backgroundColor: porps.color,
    width: '250px',
    padding: '20px',
    margin: '20px auto',
  }

  return <div style={wrapperStyle}>{porps.children}</div>
}

export default Wrapper
