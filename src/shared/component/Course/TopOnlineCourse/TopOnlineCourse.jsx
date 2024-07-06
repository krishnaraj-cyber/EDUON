import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import "../TopOnlineCourse/TopOnlineCourse.css";

function TopOnlineCourse() {
  return (
    <>
      <h1 class="Heading-toc">Top Online Courses</h1>
      <img class="mstit-underline" src="images/mstit-underline.png" alt="" />

      <section className="section-toc-al-cntn">
        <div className="toc-content-boxes">
          <img src="images/toc-ai.jpg" alt="" />
          <h3>AI for everyone</h3>
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
            <a href="https://www.youtube.com/watch?v=gD_HWj_hvbo&list=PLGs0VKk2DiYyXlbJVaE8y1qr24YldYNDm">
              Play Video <FontAwesomeIcon icon={faCirclePlay} />
            </a>
          </div>
        </div>
        <div className="toc-content-boxes">
          <img src="images/toc-dl.jpg" alt="" />
          <h3>Networks and deep learning</h3>
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
            <a href="https://www.youtube.com/watch?v=gZmobeGL0Yg&list=PLZbbT5o_s2xq7LwI2y8_QtvuXZedL6tQU">
              Play Video <FontAwesomeIcon icon={faCirclePlay} />
            </a>
          </div>
        </div>
        <div className="toc-content-boxes">
          <img src="images/toc-py.jpg" alt="" />
          <h3>Learning with python</h3>
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
            <a href="https://www.youtube.com/watch?v=m67-bOpOoPU">
              Play Video <FontAwesomeIcon icon={faCirclePlay} />
            </a>
          </div>
        </div>
        <div className="toc-content-boxes">
          <img src="images/toc-mrktng.jpg" alt="" />
          <h3>Financial markets</h3>
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
            <a href="https://www.youtube.com/watch?v=HCIO9xw24E8">
              Play Video <FontAwesomeIcon icon={faCirclePlay} />
            </a>
          </div>
        </div>
        <div className="toc-content-boxes toc-content-boxes-lastone">
          <img src="images/toc-eng.jpg" alt="" />
          <h3>Speak English Professionally</h3>
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
            <a href="https://www.youtube.com/watch?v=eF7nRqKi8CU&list=PLBAH_GfJiuYxcZR1lWMUvn_w3mHqlQEx_">
              Play Video <FontAwesomeIcon icon={faCirclePlay} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default TopOnlineCourse;
