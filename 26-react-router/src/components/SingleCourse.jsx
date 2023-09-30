import { useParams, Link, useNavigate } from 'react-router-dom'
import courses from '../data/courses'
import { useEffect } from 'react'
//import NotFound from './NotFound'

const SingleCourse = () => {
  const params = useParams()
  const navigate = useNavigate()
  const course = courses.find((course) => course.slug === params.courseSlug)

  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' })
    }
  }, [course, navigate])

  /* Simply show NotFound
  if (!course) {
    return (
      <NotFound>
        <Link to=".." relative="path">
          All courses
        </Link>
      </NotFound>
    )
  }*/

  return (
    <>
      <h2>{course?.title}</h2>
      <h3>{course?.slug}</h3>
      <h4>{course?.id}</h4>
      <Link to=".." relative="path">
        All courses
      </Link>
    </>
  )
}

export default SingleCourse
