import React from 'react'

const About = () => {
  return (
    <div className="container text-center">
      <div className="row align-items-start">
        <div className="col p-3">
          <img src="../images/Its_me.jpg" className="w-50" alt="it's me" />
        </div>
        <div className="col p-3">
          <h3 className="text-light bg-dark">Ivan Krutikhin</h3>
          <h5 className="text-light bg-dark">React developer</h5>
          <img src="../images/logo192.png" className="w-50" alt="it's React" />
          <h5 className="text-light bg-dark">
            github: https://github.com/ivankrutik
          </h5>
          <h5 className="text-light bg-dark">e-mail: IvanKrutik@gmail.com</h5>
        </div>
      </div>
    </div>
  )
}

export default About
