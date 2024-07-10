import React from 'react'
import { Link } from 'react-router-dom'

export const UpdatedCourse = () => {
  return (
    <>



    {/* Styles Mentioned in blog.css */}




   <section className="blg-cntainr">
    <div>
        
          <h4 className="text-4xl pt-10 pb-5 border-b-2 mb-10 font-medium">Subjects</h4>

          <div className="blg-lft-grid">
            <div className="blg-lft-g-items">
              <img class="" src="images/blog-ee1.jpg" />
              <h3 className='underline'>Data Science</h3>
              <p className="text-center"></p>
              <p >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                mollitia corporis sed iure veniam ipsam, et, quasi, hic maxime
                odit accusantium autem necessitatibus excepturi dolorem
                voluptatem sit inventore rerum iste.
              </p>
              <button> <Link to='/subject-datascience'>Read more</Link></button>
            </div>


        </div>
        </div>
    </section>
    
    
    
    </>
  )
}
