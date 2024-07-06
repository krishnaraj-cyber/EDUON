import React from 'react'
import { Link } from 'react-router-dom'
import '../Course/Course.css'

function Course() {
  return (
    <>

<h1 class="Heading-toc">Categories</h1>
        <img
            class="mstit-underline"
            src="images/mstit-underline.png"
            alt=""
          />  

<div className="course-container">
      <div className="course-item">
        <Link to="/top-online-course-list">
          <div>
            <img src="images/top-online-course.jpg" alt="Top Online Courses" width="" />
            <h2>Top Online Courses</h2>
            <p>Explore the best online courses in various fields like AI, Networks and deep learning, programming, Financial markets, and more.</p>
          </div>
        </Link>
      </div>
      <div className="course-item">
        <Link to="/popular-subjects-list">
          <div>
            <img src="images/popular-subjects.jpg" alt="Popular Subjects" width="" />
            <h2>Popular Subjects</h2>
            <p>Discover popular subjects including Data Science, Computer Science, Business, and more.</p>
          </div>
        </Link>
      </div>
    </div>

    </>
  )
}

export default Course