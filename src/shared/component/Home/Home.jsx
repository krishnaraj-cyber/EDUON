import "../../../../src/App.css";
import { Link } from "react-router-dom";



export default function Home() {
  return (
    <>
      <div class="frame1" id="link-home">
        <div class="frame1-flex">
          <div class="frame1-content">
            <h1 class="expertit">
              Expert IT training when and where you need it
            </h1>

            <p class="lorem">
              Lorem ipsum dolor sit consectetur adipisicing elit.Voluptas
              architecto dalaremque fugiat Tempora malestias minus mallitia
              optio labariasam nulla,sed,nurnquam ad tempare
            </p>
            <div class="viewcoursebutton">
              <a href="#link-courses">
                <button> View Courses</button>
              </a>
            </div>
          </div>
          <div class="frame1-img">
            <img src="images/22222.png" />
          </div>
          <img src="images/x-design.png" alt="" id="x-design" />
          <img src="images/round-design.png" alt="" id="round-design" />
          <img src="images/doubled-circles.png" alt="" id="doubled-circles" />
        </div>
      </div>

{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Frame 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div class="frame2">
        <div class="title-subtitle">
          <p class="stit"> Our Affordable </p>
          <h2 class="mtit">Your Benifit with Eduon</h2>
          <img
            class="mstit-underline"
            src="images/mstit-underline.png"
            alt=""
          />
        </div>
        <div class="alllogo">
          <div>
            <img class="logo1" src="images/watchlogo.png" />
            <p>Save time & money</p>
          </div>

          <div>
            <img class="logo1" src="images/scalelogo.png" />
            <p>Balance learning with life</p>
          </div>

          <div>
            <img class="logo1" src="images/booklogo.png" />
            <p>Gain valuable knowledge</p>
          </div>

          <div class="logo12">
            <img src="images/,aplogo.png" />
            <p  id="link-courses">Gain valuable knowledge</p>
          </div>
        </div>
      </div>

{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Frame 3 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}


      <div class="frame3">
        <div class="title-subtitle" style={{paddingTop: '10px'}}>
          <p class="stit"> Popular Courses </p>
          <h2 class="mtit">Popular Online Courses</h2>
          <img
            class="mstit-underline"
            src="images/mstit-underline.png"
            alt=""
          />
        </div>

        <div class="f3container">
          <div class="f3tables">
            <img class="imagerow31" src="images/online course 1.jpg" />
            <p class="f3tablesyellowtext">Education</p>
            <p class="f3tablespbiggertext">
              Programming foundations: real- world examples
            </p>
            <div style={{display : 'flex' , color: '868686' , justifyContent: 'spaceBetween ', padding: '15px 5px',}}>
              <p className="lessons0">0 Lessons</p>
              <p className="students44">44 students</p>
            </div>
          </div>
          <div class="f3tables">
            <img class="imagerow31" src="images/online course 3.jfif" />
            <p class="f3tablesyellowtext">School</p>
            <p class="f3tablespbiggertext">
              Teaching assistant certificate in learning in schools
            </p>
            <div style={{display: 'flex' , color: '868686' , justifyContent: 'spaceBetween' , padding: '15px 5px' }}>
              <p className="lessons0">0 Lessons</p>
              <p className="students44">44 students</p>
            </div>
          </div>
          <div class="f3tables">
            <img
              class="imagerow31"
              id="f3-table-pic3"
              src="images/online course 2.jpg"
            />
            <p class="f3tablesyellowtext">Language</p>
            <p class="f3tablespbiggertext">
              English: spelling, punctuation and grammar
            </p>
            <div style={{display:'flex' , color: '868686' , justifyContent: 'spaceBetween' , padding: '15px 5px'}}>
              <p className="lessons0">0 Lessons</p>
              <p className="students44">39 students</p>
            </div>
          </div>
        </div>
        <div style={{position: 'relative' , bottom:'35px' }} class="scrollbars">
          <div class="scroll"></div>
          <div class="scroll1"></div>
        </div>
      </div>

{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Frame 4 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}


      <div class="frame4">
        <div>
          <div class="title-subtitle">
            <p class="stit"> Categories </p>
            <h2 class="mtit">Top Categories</h2>
            <img
              class="mstit-underline"
              src="images/mstit-underline.png"
              alt=""
            />
          </div>

          <div class="multiplebox4">
          <a href="https://www.youtube.com/watch?v=c9Wg6Cb_YlU"> 
            <div class="frame4image1" > 
              
              <p style={{fontSize: '25px'}}>Design</p>
              <br />
              <p style={{fontWeight: 'normal'}}>Over 200+ courses</p>
            
            </div>
            </a>
            <a href="https://www.youtube.com/watch?v=nu_pCVPKzTk" >
            <div class="frame4image2">
              
              <p style={{fontSize: '25px'}}>Development</p>
              <br />
              <p style={{fontWeight: 'normal'}}>Over 200 courses</p>
              
            </div>
            </a>
            <a href="https://www.youtube.com/results?search_query=Business" >
            <div class="frame4image3">
            
              <p style={{fontSize: "25px"}}>Business</p>
              <br />
              <p style={{fontWeight: "normal"}}>Over 150 courses</p>
              
            </div>
            </a>
            <a href="https://www.youtube.com/watch?v=f3L7yFPMtBw" >
            <div class="frame4image4">
            
              <p style={{fontSize: '25px'}}>Marketing</p>
              <br />
              <p style={{fontWeight: 'normal'}}>Over 200+ courses</p>
              
            </div>
            </a>
            <a href="https://www.youtube.com/watch?v=vPl_qqBdeeY&list=PLfqgOEAL4jgIunxUksOXd6LNxjEPN2MSi&index=2" >
            <div class="frame4image5">
            
              <p style={{fontSize: '25px'}}>IT & Software</p>
              <br />
              <p style={{fontWeight: 'normal'}}>Over 250 courses</p>
              
            </div>
            </a>
            <a href="https://www.youtube.com/watch?v=-ETQ97mXXF0" >
            <div class="frame4image6">
            
              <p style={{fontSize: '25px'}}>Data Science</p>
              <br />
              <p style={{fontWeight: 'normal'}}>Over 50 courses</p>
            </div>
            </a>

            <a href="https://www.youtube.com/watch?v=yhAmMUi2NmM" >
              <div class="frame4image7">
              <p style={{fontSize: '25px'}}>Photography</p>
              <br />
              <p style={{fontWeight: 'normal'}}>Over 700 courses</p>
              
            </div>
            </a>
            <a href="https://www.youtube.com/watch?v=6gHEIF0rT2w&list=PLB585CE43B02669C3" >
            <div class="frame4image8">
            
              <p style={{fontSize: '25px'}}>Music</p>
              <br />
              <p style={{fontWeight: 'normal'}}>Over 150 courses</p>
              
            </div>
            </a>
          </div>

          <div class="allcatebutton">
            <Link to=''><button>All Categories</button></Link>
          </div>

          <div class="yellowrectangle">
            <div class="yellowpt">
              <div>
                <img
                  src="images/yelicon1.png"
                  width="50px"
                  height="fit-content"
                />
              </div>
              <div class="yellowboxcontent">
                <h3>Go at your own course</h3>
                <p>
                  Enjoy lifetime access to courses <br />
                  on Eduon Website
                </p>
              </div>
            </div>
            <div class="yellowpt">
              <div>
                <img
                  src="images/yelicon2.png"
                  width="50px"
                  height="fit-content"
                />
              </div>
              <div class="yellowboxcontent">
                <h3>Learn from our experts</h3>
                <p>
                  Enjoy lifetime access to courses
                  <br /> on Eduon Website
                </p>
              </div>
            </div>
            <div class="yellowpt">
              <div>
                <img
                  src="images/yelicon3.png"
                  width="50px"
                  height="fit-content"
                />
              </div>
              <div class="yellowboxcontent">
                <h3>Find video courses</h3>
                <p>
                  Enjoy lifetime access to courses
                  <br /> on Eduon Website
                </p>
              </div>
            </div>
          </div>

          <div style={{textAlign: 'center'}}>
            <div style={{marginBottom: '40px'}}>
              <p class="stit"> Feedback </p>
              <h2 class="mtit">What Students Say</h2>
              <img
                class="mstit-underline"
                src="images/mstit-underline.png"
                alt=""
              />
            </div>
            <img
              style={{paddingBottom: '30px' , height:'90px', margin:'0 auto'}}
              src="images/icons8-get-quote-24.png"
              alt=""
              
            />
            <p id="invidunt">
              Lorem ipsum dolod sit amet,consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labote et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est lorem ipsum dolor sit amet.
            </p>

            <div class="logojess">
              <div>
                <img id="logojess" src="images/handfoldgirl.jpg" />
              </div>
              <div>
                <p style={{fontWeight:'600'}} >
                  Jessica Molony
                </p>
                <p style={{color:'#868686',textAlign: 'left' , fontSize: 'small' , padding:'7px 0 0 1px' , }}>
                  Designer
                </p>
              </div>
              <img
                src="images/left-design-fr4.png"
                alt=""
                id="left-design-fr4"
              />
              <img
                src="images/right-design-fr4.png"
                alt=""
                id="right-design-fr4"
              />
            </div>

            <div class="buynowbutton">
              <button href="">Buy Now</button>
            </div>

            <div class="scrollbars">
              <div class="scroll"></div>
              <div class="scroll1"></div>
              <div class="scroll1"></div>
            </div>
          </div>
        </div>
      </div>

{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Frame 5 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}


      <div class="frame5">
        <div class="untitled1-bg">
          <div class="stitmtitframe5">
            <p class="stitframe5"> Education Events </p>
            <h2 class="mtitframe5">Upcoming Events</h2>
            <img
              class="mstit-underlinefr5"
              src="images/mstit-underline.png"
              alt=""
            />
          </div>

          <div class="frame5main">
            <div class="frame500">
              <div class="frame5box">
                <div>
                  <img class="s501" src="images/Ellipse-66.png" />
                </div>

                <div class="frame5cont">
                  <div class="fr5datetime">
                    <span>
                      <img src="images/icons8-calendar-50.png" />
                    </span>
                    <span class="frame5cont555">Aug 13 2020</span>
                    <span>
                      <img src="images/icons8-time-50.png" />
                    </span>
                    <span class="frame5cont556">Monday 3:00AM-5:00PM</span>
                  </div>

                  <h4>
                    Comprehensive literacy and reading
                    <br />
                    recovery conference
                  </h4>
                  <div class="fr5location">
                    <span>
                      <img src="images/icons8-location-50.png" />
                    </span>
                    <span class="frame5cont666">Washington DC</span>
                  </div>
                </div>
              </div>

              <div class="frame5box">
                <div>
                  <img class="s501" src="images/Ellipse-67.png" />
                </div>

                <div class="frame5cont">
                  <div class="fr5datetime">
                    <span>
                      <img src="images/icons8-calendar-50.png" />
                    </span>
                    <span class="frame5cont555">Sep 14 2020</span>
                    <span>
                      <img src="images/icons8-time-50.png" />
                    </span>
                    <span class="frame5cont556">Monday 3:00AM-5:00PM</span>
                  </div>

                  <h4 style={{paddingRight: '44px'}}>
                    Futute of higher education: an
                    <br />
                    invitation to lead
                  </h4>
                  <div class="fr5location">
                    <span>
                      <img src="images/icons8-location-50.png" />
                    </span>
                    <span class="frame5cont666">New Orleens, LA</span>
                  </div>
                </div>
              </div>

              <div class="frame5box">
                <div>
                  <img class="s501" src="images/Ellipse-68.png" />
                </div>

                <div class="frame5cont">
                  <div class="fr5datetime">
                    <span>
                      <img src="images/icons8-calendar-50.png" />
                    </span>
                    <span class="frame5cont555">Oct 01 2020</span>
                    <span>
                      <img src="images/icons8-time-50.png" />
                    </span>
                    <span class="frame5cont556">Monday 3:00AM-5:00PM</span>
                  </div>

                  <h4>
                    National reading recovery & literacy
                    <br /> conference
                  </h4>
                  <div class="fr5location">
                    <span>
                      <img src="images/icons8-location-50.png" />
                    </span>
                    <span class="frame5cont666">Ballavu a WA </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img class="frame5img2" src="images/wowww.png" />
            </div>
          </div>
        </div>
      </div>

      <div class="dividerframe6"></div>

{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Frame 6 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}


      <div class="frame6">
        <div class="title-subtitle">
          <p class="stit"> Our Teachers </p>
          <h2 class="mtit">Our International Teachers</h2>
          <img
            class="mstit-underline"
            src="images/mstit-underline.png"
            alt=""
          />
        </div>
        <div class="framebox">
          <div class="box">
            <img class="boxxx" src="images/box1.png" />
            <h2>Earl McGowan</h2>
            <p>IT & Software</p>
          </div>
          <div class="box">
            <img class="boxxx" src="images/box2.png" />
            <h2>Chris Miller</h2>
            <p>Mathematic</p>
          </div>
          <div class="box">
            <img class="boxxx" src="images/box3.png" />
            <h2>Mark Dent</h2>
            <p>Programmer</p>
          </div>
          <div class="box">
            <img class="boxxx1" src="images/box4.png" />
            <h2>Lena Bodie</h2>
            <p>English</p>
          </div>
        </div>

        <div class="dividerframe6"></div>

        <div>
          <div class="ecclipses">
            <div>
              <img src="images/ecclipse3.png" />
              <p>Sucess Rate</p>
            </div>
            <div>
              <img src="images/ecclipse2.png" />
              <p>Student Enrolled</p>
            </div>
            <div>
              <img src="images/ecclipse1.png" />
              <p>Certifies Teachers</p>
            </div>
            <div>
              <img src="images/ecclipse.png" />
              <p>Complete Courses</p>
            </div>
          </div>
        </div>
      </div>

{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Frame 7 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}


      <div class="frame7">
        <div class="title-subtitle">
          <p class="stit">Our News </p>
          <h2 class="mtit">Explore Recent News</h2>
          <img
            class="mstit-underline"
            src="images/mstit-underline.png"
            alt=""
          />
        </div>
        <div class="frame7container">
          <div class="picfr7">
            <img src="images/1.jpg" />
            <p>Career Advice</p>
            <h3>
              Leading the way with lifelong
              <br /> learning
            </h3>
            <div class="dividerframe7"></div>
            <span style={{paddingTop: '15px'}}>By:Admin</span>
            <span style={{paddingLeft:'20%' , paddingTop: '15px' }}>
              Pasted aon 13/07/2020
            </span>
          </div>
          <div class="picfr7">
            <img src="images/2.jpg" />
            <p>Market Trends</p>
            <h3>
              All aspire students are now
              <br /> student card eligible
            </h3>
            <div class="dividerframe7"></div>
            <span style={{paddingTop: '15px'}}>By:Admin</span>
            <span style={{paddingLeft: '20%' , paddingTop: '15px'}}>
              Pasted aon 12/07/2020
            </span>
          </div>
          <div class="picfr7">
            <img src="images/3.jpg" />
            <p>Research </p>
            <h3>
              Determining the true goal of a <br />
              good Education is difficult
            </h3>
            <div class="dividerframe7"></div>
            <span style={{paddingTop: '15px'}}>By:Admin</span>
            <span style={{paddingLeft: '20%' , paddingTop: '15p'}}>
              Pasted aon 11/07/2020
            </span>
          </div>
        </div>
      </div>

{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Frame 8 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}


      <div class="frame8">
        <div>
          <img src="images/fr81.png" />
          <h2>KAYEDUC</h2>
        </div>
        <div>
          <img src="images/fr82.png" />
          <h2>AMEDUCA</h2>
        </div>
        <div>
          <img src="images/fr83.png" />
          <h2>VERTEDUC</h2>
        </div>
        <div>
          <img src="images/fr84.png" />
          <h2>EDUCATRI</h2>
        </div>
        <div>
          <img src="images/fr85.png" />
          <h2>SUREDUC</h2>
        </div>
        <div>
          <img src="images/fr81.png" />
          <h2>KAYEDUC</h2>
        </div>
      </div>
    </>
  );
}
