import React from "react";
import { Link } from "react-router-dom";
import "../DataScience/DataScience.css";
import VideoComponent from "../../../VideoComponent/VideoComponent.jsx";
import { FaArrowRight } from "react-icons/fa";
import RatingStar from "../../../RatingStar.jsx";

export const DataScience = () => {
  const videoSrc = "/videos/preview.mp4";
  return (
    <>
 





 <article className="reat-slide-vdo ">
          <div className="">
            <VideoComponent src={videoSrc} width={"100%"}/>
          </div>
          <Link to="/login_page"><button> Start Learning</button></Link>
          <div className="">
            <p className=" font-semibold ">This Course Includes</p>
            <div className="flex py-5">
              <img src="images/reat-time.png" width={"45px"} alt="" />
              <div className="pl-4">
                <p className="font-medium">5 Hours</p>
                <p className="text-gray-500">Of self-paced video lessons</p>
              </div>
            </div>
            <div className="flex pb-5">
              <img src="images/reat-cert.png" width={"45px"} alt="" />
              <div className="pl-4">
                <p className="font-medium">Completion Certificate</p>
                <p className="text-gray-500">awarded on course completion</p>
              </div>
            </div>
          </div>
        </article>








    <section className="reat-crse-banner" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7)), url("images/datascience.jpg")`,}}>
      <article className="reat-crse-banner-cntnt  ">
        <div className="w-2/3">
          <p className="flex ">
            <a href="">Course </a> | <a href=""> Subjects</a>
            <details href="">
              <ul>
                <li>Computer Science</li>
              </ul>
              <summary>ReactJS</summary>
            </details>
          </p>
          <h2 className="text-5xl  pt-10 line leading-relaxed font-semibold">
            ReactJS for Beginners
          </h2>
          <h3 className=" pt-4 font-semibold text-xl">
            React JS Free Course: Master Front-End Development
          </h3>
          <p className=" pt-5">
            With the ReactJS free course for beginners, learn front-end
            development in an immersive way. Discover the ideas behind
            JavaScript toolkit and how to use it to create evolving,
            user-friendly user interfaces. For web developers of all expertise
            levels, this course is ideal for anybody who aspires to learn
            ReactJS.
          </p>
        </div>
      </article>

     
        </section>


        

      
        <main className="reat-main-cntnt" >

      



        <article className="crse-reatpg-art-comn w-2/3">
          <h3>Recognised Bachelor's Honours degree</h3>
          <div className="flex gap-5">
            <div className="reatpg-art1-pont">
              <p className="flex gap-3">
                <FaArrowRight size={"22px"} color="rgb(70,70,70)" />
                Components of ReactJS
              </p>
              <p className="flex gap-3">
                <FaArrowRight size={"22px"} color="rgb(70,70,70)" />
                ReactJS props
              </p>
              <p className="flex gap-3">
                <FaArrowRight size={"22px"} color="rgb(70,70,70)" />
                React router
              </p>
            </div>
            <div className="reatpg-art1-pont">
              <p className="flex gap-3">
                <FaArrowRight size={"22px"} color="rgb(70,70,70)" />
                ReactJS nesting components
              </p>
              <p className="flex gap-3">
                <FaArrowRight size={"22px"} color="rgb(70,70,70)" />
                React state
              </p>
              <p className="flex gap-3">
                <FaArrowRight size={"22px"} color="rgb(70,70,70)" />
                React middleware
              </p>
            </div>
          </div>
        </article>
        <article className="crse-reatpg-art-comn w-2/3">
          <h3>Recognised Bachelor's Honours degree</h3>
          <div className="flex flex-wrap gap-4">
            <p className="rounded-full border-2 px-5 py-1.5">UI developers</p>
            <p className="rounded-full border-2 px-5 py-1.5">
              Full stack developers
            </p>
            <p className="rounded-full border-2 px-5 py-1.5">Programmers</p>
            <p className="rounded-full border-2 px-5 py-1.5">
              Solution architects
            </p>
            <p className="rounded-full border-2 px-5 py-1.5">
              Software engineers
            </p>
            <p className="rounded-full border-2 px-5 py-1.5">
              Aspiring developers
            </p>
          </div>
        </article>

        <article className="crse-reatpg-art-comn reat-crse-mul-vdo w-2/3">
          <h3>What you will learn in this free React course?</h3>
          <div className="">
            <details className="reatpg-detsum-main">
              <details className="reatpg-detsum-sub">
                <summary>Introduction</summary>
                <details className="reatpg-detsum-sub01">
                  <summary>Course Introduction</summary>
                  <VideoComponent src={videoSrc} />
                </details>
              </details>
              <details className="reatpg-detsum-sub">
                <summary>Lesson 01:What is React?</summary>
                <details className="reatpg-detsum-sub01">
                  <summary>What is React</summary>
                  <VideoComponent src={videoSrc} />
                </details>
              </details>
              <details className="reatpg-detsum-sub">
                <summary>Lesson 02:ReactJS Installation on Windows</summary>
                <details className="reatpg-detsum-sub01">
                  <summary>ReactJS Installation on Windows</summary>
                  <VideoComponent src={videoSrc} />
                </details>
              </details>
              <details className="reatpg-detsum-sub">
                <summary>Lesson 03:React components</summary>
                <details className="reatpg-detsum-sub01">
                  <summary>React Components</summary>
                  <VideoComponent src={videoSrc} />
                </details>
              </details>
              <details className="reatpg-detsum-sub">
                <summary>Lesson 04:Nesting components</summary>
                <details className="reatpg-detsum-sub01">
                  <summary>Nesting Components</summary>
                  <VideoComponent src={videoSrc} />
                </details>
              </details>
              <details className="reatpg-detsum-sub">
                <summary>Lesson 05:React props</summary>
                <details className="reatpg-detsum-sub01">
                  <summary>React Props</summary>
                  <VideoComponent src={videoSrc} />
                </details>
              </details>
              <details className="reatpg-detsum-sub">
                <summary>Lesson 06:React state</summary>
                <details className="reatpg-detsum-sub01">
                  <summary>React State</summary>
                  <VideoComponent src={videoSrc} />
                </details>
              </details>
              <details className="reatpg-detsum-sub">
                <summary>Lesson 07:React demo for begginers</summary>
                <details className="reatpg-detsum-sub01">
                  <summary>React Demo for Beginners</summary>
                  <VideoComponent src={videoSrc} />
                </details>
              </details>
              <details className="reatpg-detsum-sub">
                <summary>Lesson 08:React vs Angular vs Vue</summary>
                <details className="reatpg-detsum-sub01">
                  <summary>React vs Angular vs Vue</summary>
                  <VideoComponent src={videoSrc} />
                </details>
              </details>
              <details className="reatpg-detsum-sub">
                <summary>Lesson 09:How to connect ReactJS with NodeJS?</summary>
                <details className="reatpg-detsum-sub01">
                  <summary>How to connect ReactJS with NodeJS</summary>
                  <Link to = "/login_page" className="text-blue-600">Login for more Videos</Link>
                </details>
              </details>
              <summary>ReactJS for beginners</summary>
            </details>
          </div>
        </article>

        <article className="crse-reatpg-art-comn w-2/3">
          <div>
            <h3>What does the degree certificate look like?</h3>
            <p>
              Upon successful completion of the 4 year Bachelor of Science
              (Honours) in Data Science , you will receive a Bachelor's degree
              issued by Eduon.
            </p>
            <img src="images/course-ds-certi.png" alt="" width={"800px"} />
          </div>
        </article>

        <article className="crse-reatpg-art-comn  w-2/3">
          <h3>Why you should learn React JS?</h3>
          <div className="flex flex-wrap gap-3">
            <div className="border-2 rounded-lg border-gray-300 bg-gray-100 w-1/2 flex-1">
              <h4 className="px-5 py-4 font-medium">
                Most In-demand Framework
              </h4>
              <p className="px-5 pb-5">
                Top jobs in Full Stack development demand ReactJS as a skill
              </p>
            </div>
            <div className="border-2 rounded-lg border-gray-300 bg-gray-100 w-1/2  flex-1">
              <h4 className="px-5 py-4 font-medium">$120K per year</h4>
              <p className="px-5 pb-5">
                Annual median salary of a ReactJS Developer
              </p>
            </div>
          </div>
        </article>
        <article className="crse-reatpg-art-comn w-2/3">
          <h3>About The Course:</h3>
          <p className="p-4 border-2 border-gray-300">
            The common JavaScript package ReactJS is used in front-end
            development. It is renowned for being quick, easy to use, and
            scalable. With so many resources accessible to learn it, ReactJS is
            an excellent option for novices as it is simple to understand and
            apply. Start learning the fundamentals of ReactJS with this free
            course covering elements, equipment, signal handling, navigation,
            and testing. Participating in a real-world endeavor will also
            provide you with practical ReactJS experience. You will be able to
            develop your own ReactJS applications and contribute to open-source
            projects by the conclusion of this course.
          </p>
        </article>
        <article className="crse-reatpg-art-comn w-2/3 mb-5">
          <h3>Learner Review</h3>
          <div className="bg-gray-100 border-2 border-gray-300 w-2/3 p-7">
            <div className="flex gap-5 pb-5">
              <img src="images/user-icon.png" alt="" width={"70px"} />
              <div className="space-y-4">
                <p>Aatmik Sanghvi</p>
                <RatingStar rating={5} />
              </div>
            </div>
            <p>
              I've successfully completed a course on ReactJS. Thank you
              Simplilearn for providing a beginners course on this topic. It has
              been extremely helpful.
            </p>
          </div>
        </article>
      

      </main>

      {/* <section className="blg-cntainr">
        <div>
          <h4 className="text-4xl pb-5 border-b-2 mb-10 font-medium text-center">
            About the Program
          </h4>
          <div className="blg-lft-grid">
            <div className="blg-lft-g-items">
              <img class="" src="images/blog-ee1.jpg" />
              <h3 className="underline">Programme</h3>
              <p className="text-center"></p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                mollitia corporis sed iure veniam ipsam, et, quasi, hic maxime
                odit accusantium autem necessitatibus excepturi dolorem
                voluptatem sit inventore rerum iste.
              </p>
            </div>
            <div className="blg-lft-g-items">
              <img class="" src="images/blog-ee1.jpg" />
              <h3 className="underline">Student Experience</h3>
              <p className="text-center"></p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                mollitia corporis sed iure veniam ipsam, et, quasi, hic maxime
                odit accusantium autem necessitatibus excepturi dolorem
                voluptatem sit inventore rerum iste.
              </p>
            </div>
            <div className="blg-lft-g-items">
              <img class="" src="images/blog-ee1.jpg" />
              <h3 className="underline">Data Science</h3>
              <p className="text-center"></p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                mollitia corporis sed iure veniam ipsam, et, quasi, hic maxime
                odit accusantium autem necessitatibus excepturi dolorem
                voluptatem sit inventore rerum iste.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};
