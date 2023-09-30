import { Link, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import courses from '../data/courses'

const SORT_KEY = ['id', 'slug', 'title']

function sortCourses(courses, key) {
  const sortedCourses = [...courses]
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1))
  return sortedCourses
}

const Courses = () => {
  const location = useLocation()
  const query = queryString.parse(location.search)
  const [sortKey, setSortKey] = useState(query.sort)
  const [sortedCourses, setSortedCourses] = useState(
    sortKey && SORT_KEY.includes(sortKey)
      ? sortCourses(courses, sortKey)
      : courses
  )

  const navigate = useNavigate()
  useEffect(() => {
    if (!SORT_KEY.includes(sortKey)) {
      navigate('.', { relative: 'path' })
      setSortKey()
      setSortedCourses([...courses])
    }
  }, [sortKey, navigate])

  return (
    <>
      <h1>Courses</h1>
      <h4>
        {sortKey && SORT_KEY.includes(sortKey)
          ? `Courses sorted by ${sortKey}`
          : ``}
      </h4>
      {sortedCourses.map((course) => {
        return (
          <div key={course.id}>
            <Link className="courseLink" to={course.slug}>
              {course.title}
            </Link>
          </div>
        )
      })}
    </>
  )
}

export default Courses
