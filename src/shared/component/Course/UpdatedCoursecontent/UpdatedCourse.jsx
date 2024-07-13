import React from 'react'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa';

export const UpdatedCourse = () => {
  return (
    <>



   

<div className="updated-course-banner">
        <div>
        <p>
          <a href="">Course </a> | <a href=""> Subjects</a> 
          
        </p>
        <h2 className="text-5xl  pt-10 line leading-relaxed font-semibold">Online Course by Eduon</h2>
        
        <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae facere sapiente exercitationem rem dicta id eum deserunt ratione pariatur nostrum. Dolores expedita possimus quis nam, vel provident debitis iste sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ex est minus, esse repellat optio nulla aliquam voluptate beatae nesciunt deserunt ad omnis architecto? Itaque molestiae eius blanditiis hic repudiandae.</p>
      </div>
      </div>
      <div className="dsov4p-flex">
        <div className="dsov4p-items">
            <h3>Recognised Bachelor's Honours degree</h3>
            <p>Offered by Indian Institute of Technology Guwahati.</p>
        </div>
        <div className="dsov4p-items">
            <h3>Students experience</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, officia!</p>
        </div>
        <div className="dsov4p-items">
            <h3>100% online</h3>
            <p>Hands-on learning from anywhere. Online classes & examinations. Optional campus immersions.</p>
        </div>
        <div className="dsov4p-items">
            <h3>Hands-on experience</h3>
            <p>Gain practical experience with internships and capstone projects.</p>
        </div>
      </div>
      <article className="dsovpara-datails">
    <h2>Upskill for the changing tech landscape and prepare for emerging jobs
    </h2>
      <h3>Prepare yourself for the evolving tech landscape</h3>
      <p>Learn from an industry oriented curriculum that covers cutting-edge topics in artificial intelligence, including deep learning, deep reinforcement learning, deep representation learning, deep generative models and applications, and AI ethics. Expose yourself to over 50 programming languages, tools, libraries and repositories. Work on research projects with an unparalleled access to high-performance computing facilities of two of India’s most powerful supercomputers - the PARAM Kamrupa and the PARAM Ishan.</p>
      <h3>Focus on application-based learning through capstone projects, internships and career-boosting certificates</h3>
      <p>Acquire in-demand data science skills and gain insights from industry modules incorporated into the curriculum. Receive expert guidance from industry pioneers. Learn through industry certificates, and apply your learning with internships, learn how to tackle real-world problems with the capstone project, accelerate your career growth and increase your chances of employability with certificates from leading tech companies like Google, Meta, and IBM.</p>
      <h3>Take control of your academic journey</h3>
      <p>With flexible exit options at the end of each year, shape your education in a way that aligns with your career aspirations. You can exit with a Foundational Certificate in  the first year, receive your Bachelor of Science degree upon completing all the courses in the upcoming year, or earn an honours degree at the end of the final year.</p>
      <h3>Graduate from one of India’s top technology institutes</h3>
      <p>Earn a Bachelor's degree from a globally renowned institution.Eduon has been ranked 7th among India’s top engineering institutes, according to NIRF 2023. Eduon is renowned for its academic excellence, comprehensive curriculum, and world-class faculty. Graduates from the institute work at leading organisations like Google, Microsoft, Goldman Sachs, L&T, and Intel.</p>
      <h3>More about the programme:</h3>
      <ul>
        <li>Pursue roles such as AI Engineer, Data Engineer, ML Engineer, and Data Analyst after completing this programme.</li>
        <li>Complete the degree at your own pace in up to 8 years.</li>
        <li>Build a strong programming foundation in Python, C, R, and Java.</li>
        <li>Develop machine-learning systems and integrate them with large-scale AI models under the supervision of industry leaders.</li>
        <li>Lectures from accomplished industry professionals helping you develop a well-rounded outlook of the Data Science.</li>
        <li>Participate in optional immersion sessions for valuable on-campus experience at Eduon</li>
      </ul>
      <h3>What facilities do I get after admission?</h3>
      <ul>
        <li>You will be an Eduon</li>
        <li>You will get official Eduon email ID</li>
        <li>Access to online facilities of Eduon (eg: library resources, computer centre, etc)</li>
        <li>Access to on-campus fests</li>
        <li>Access to online student groups/clubs/fests</li>
        <li>Hostel and mess facilities (on payment basis) during your visit to Eduon</li>
      </ul></article>
      <article className="dsov-certifi">
        <div>
        <div><img src="images/course-ds-certi.png" alt="" /></div>
        <div >
            <h3>What does the degree certificate look like?</h3>
            <p>Upon successful completion of any course cinducted by us , you will receive a Bachelor's degree issued by Eduon.</p>
        </div>
        </div>
      </article>



{/* Styles Mentioned in blog.css */}

      <section className="blg-cntainr">
    <div>
        
          <h4 className="text-4xl pb-5 border-b-2 mb-10 font-medium text-center">Explore Free Online Courses</h4>
            <div className="blg-lft-grid">


            <div className="blg-lft-g-items">
              <img class="" src="images/development.jpg" />
              <h3 className='underline'>ReactJS for Beginners</h3>
              <p className="text-center"></p>
              <p className='flex gap-3 align-middle ' >
                 <FaCheck size={25} color="223344" />Completion Certificate
              </p>
              <button className=''> <Link to='/subject-datascience'>View Courses</Link></button>
           </div>
           <div className="blg-lft-g-items">
              <img class="" src="images/top-online-course.jpg" />
              <h3 className='underline'>Financial markets</h3>
              <p className="text-center"></p>
              <p  className='flex gap-3 align-middle ' >
              <FaCheck size={25} color="223344" />Completion Certificate
              </p>
              <button> <Link to='/subject-datascience'>View Courses</Link></button>
           </div>
           <div className="blg-lft-g-items">
              <img class="" src="images/it&software.jpg" />
              <h3 className='underline'>Introduction to Data Science</h3>
              <p className="text-center"></p>
              <p  className='flex gap-3 align-middle ' >
              <FaCheck size={25} color="223344" />Completion Certificate
              </p>
              <button> <Link to='/subject-datascience'>View Courses</Link></button>
           </div>


          </div>
        </div>
    </section>


  




 
    
    
    
    </>
  )
}
