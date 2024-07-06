import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faCirclePlay } from "@fortawesome/free-solid-svg-icons";



function PopularSubjects() {
  return (
    <>
    

    <h1 class="Heading-toc">Popular Subjects</h1>
      <img class="mstit-underline" src="images/mstit-underline.png" alt="" />

      <section className="section-toc-al-cntn">
        <div className="toc-content-boxes">
          <img src="images/ps-datascience.jpg" alt="" />
          <h3>Data science</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ipsa
            commodi perspiciatis dolores mollitia officiis quasi architecto
            reprehenderit ratione quam distinctio tenetur neque qui doloremque
            voluptatibus perferendis ex, recusandae similique.
          </p>
          <div className="toc-dwnld-btn">
            <a
              href="/documents/ai-for-everyone.pdf"
              download="AI_for_Everyone.pdf"
            >
              Download Course Material <FontAwesomeIcon icon={faDownload} />{" "}
            </a>
            <a href="https://www.youtube.com/watch?v=X3paOmcrTjQ">
              Play Video <FontAwesomeIcon icon={faCirclePlay} />
            </a>
          </div>
        </div>
        <div className="toc-content-boxes">
          <img src="images/ps-computerscience.jpg" alt="" />
          <h3>Computer science</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ipsa
            commodi perspiciatis dolores mollitia officiis quasi architecto
            reprehenderit ratione quam distinctio tenetur neque qui doloremque
            voluptatibus perferendis ex, recusandae similique.
          </p>
          <div className="toc-dwnld-btn">
            <a
              href="/documents/networks-and-deep-learning.pdf"
              download="Networks_and_Deep_Learning.pdf"
            >
              Download Course Material <FontAwesomeIcon icon={faDownload} />{" "}
            </a>
            <a href="https://www.youtube.com/watch?v=-uleG_Vecis">
              Play Video <FontAwesomeIcon icon={faCirclePlay} />
            </a>
          </div>
        </div>
        <div className="toc-content-boxes">
          <img src="images/ps-business-management.jpg" alt="" />
          <h3>Business and Management</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ipsa
            commodi perspiciatis dolores mollitia officiis quasi architecto
            reprehenderit ratione quam distinctio tenetur neque qui doloremque
            voluptatibus perferendis ex, recusandae similique.
          </p>
          <div className="toc-dwnld-btn">
            <a
              href="/documents/learning-with-python.pdf"
              download="Learning_with_Python.pdf"
            >
              Download Course Material <FontAwesomeIcon icon={faDownload} />{" "}
            </a>
            <a href="https://www.youtube.com/watch?v=T3l51Psce3c&list=PL1O57nCUQ-e-OVRFdIB-Gu1U91yH7egmm">
              Play Video <FontAwesomeIcon icon={faCirclePlay} />
            </a>
          </div>
        </div>
        <div className="toc-content-boxes">
          <img src="images/ps-education-management.jpg" alt="" />
          <h3>Education and Management</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ipsa
            commodi perspiciatis dolores mollitia officiis quasi architecto
            reprehenderit ratione quam distinctio tenetur neque qui doloremque
            voluptatibus perferendis ex, recusandae similique.
          </p>
          <div className="toc-dwnld-btn">
            <a
              href="/documents/financial-markets.pdf"
              download="Financial_Markets.pdf"
            >
              Download Course Material <FontAwesomeIcon icon={faDownload} />{" "}
            </a>
            <a href="https://www.youtube.com/watch?v=d_zylii8l_c&list=PLIZqge9KnRu7EVW2WZwfTmZM3OVx8LwZ6">
              Play Video <FontAwesomeIcon icon={faCirclePlay} />
            </a>
          </div>
        </div>
        <div className="toc-content-boxes toc-content-boxes-lastone">
          <img src="images/ps-nature-environment.jpg" alt="" />
          <h3>Nature & Environment</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ipsa
            commodi perspiciatis dolores mollitia officiis quasi architecto
            reprehenderit ratione quam distinctio tenetur neque qui doloremque
            voluptatibus perferendis ex, recusandae similique.
          </p>
          <div className="toc-dwnld-btn">
            <a
              href="/documents/speak-english-professionally.pdf"
              download="Speak_English_Professionally.pdf"
            >
              Download Course Material <FontAwesomeIcon icon={faDownload} />{" "}
            </a>
            <a href="https://www.youtube.com/watch?v=4j7oJKbibt0&list=PLivjPDlt6ApTjurXykShuUqp7LQcj9s8s">
              Play Video <FontAwesomeIcon icon={faCirclePlay} />
            </a>
          </div>
        </div>
      </section>
    
    
    
    </>
  )
}

export default PopularSubjects