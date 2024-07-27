
import "../Blog/Blog.css";

const Blog = () => {
  return (
    <>
      <div className="blg-cntainr">
        <div className="blg-cntnt-left">
          <h4 className="">Updated Educational Events</h4>

          <div className="blg-lft-grid">
            <div className="blg-lft-g-items">
              <img className="" src="images/blog-ee1.jpg" />
              <h3>National reading recovery & literacy conference</h3>
              <p className="text-center pt-4">Oct 01 2020</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                mollitia corporis sed iure veniam ipsam, et, quasi, hic maxime
                odit accusantium autem necessitatibus excepturi dolorem
                voluptatem sit inventore rerum iste.
              </p>
              <button>Read more</button>
            </div>
            <div className="blg-lft-g-items">
              <img className="" src="images/blog-ee2.jpg" />
              <h3>Futute of higher education: an invitation to lead</h3>
              <p className="text-center pt-4">Sep 14 2020</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                mollitia corporis sed iure veniam ipsam, et, quasi, hic maxime
                odit accusantium autem necessitatibus excepturi dolorem
                voluptatem sit inventore rerum iste.
              </p>
              <button>Read more</button>
            </div>
            <div className="blg-lft-g-items">
              <img className="" src="images/blog-ee3.jpg" />
              <h3>Comprehensive literacy and reading recovery conference</h3>
              <p className="text-center pt-4">Aug 13 2020</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                mollitia corporis sed iure veniam ipsam, et, quasi, hic maxime
                odit accusantium autem necessitatibus excepturi dolorem
                voluptatem sit inventore rerum iste.
              </p>
              <button>Read more</button>
            </div>
          </div>

        
          {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

          <h4 className="">Updated Recent News</h4>

          <div className="blg-lft-grid">
            <div className="blg-lft-g-items">
              <img className="" src="images/blog-re1.jpg" />
              <h3>Career Advice - Leading the way with lifelong learning</h3>
              <p className="text-center pt-4">Jun 13 2020</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                mollitia corporis sed iure veniam ipsam, et, quasi, hic maxime
                odit accusantium autem necessitatibus excepturi dolorem
                voluptatem sit inventore rerum iste.
              </p>
              <button>Read more</button>
            </div>
            <div className="blg-lft-g-items">
              <img className="" src="images/blog-re2.jpg" />
              <h3>
                Market Trends - All aspire students are now student card
                eligible
              </h3>
              <p className="text-center pt-4">Jun 12 2020</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                mollitia corporis sed iure veniam ipsam, et, quasi, hic maxime
                odit accusantium autem necessitatibus excepturi dolorem
                voluptatem sit inventore rerum iste.
              </p>
              <button>Read more</button>
            </div>
            <div className="blg-lft-g-items">
              <img className="" src="images/blog-re3.jpg" />
              <h3>
                Research - Determining the true goal of a good Education is
                difficult
              </h3>
              <p className="text-center pt-4">Jun 11 2020</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                mollitia corporis sed iure veniam ipsam, et, quasi, hic maxime
                odit accusantium autem necessitatibus excepturi dolorem
                voluptatem sit inventore rerum iste.
              </p>
              <button>Read more</button>
            </div>
          </div>

        </div>
        <div className="blg-cntnt-right">
            <div className="bcr-cat">
                <h6>Categories</h6>
                <ul>
                    <li>Design</li>
                    <li>Development</li>
                    <li>Business</li>
                    <li>Marketing</li>
                    <li>It & Software</li>
                    <li>Datascience</li>
                    <li>Photography</li>
                    <li>Music</li>
                </ul>
            </div>

            <div className="bcr-cat text-center">
                <h6>Subscribe</h6>
                <p className='pt-2 pb-4'>Subscribe to the Eduon Blog</p>
                <input type="text" placeholder="   email"  className='border-2 block'/>
                <button type="submit" className="bg-slate-300 rounded-sm pt-1 pb-1 pr-3 pl-3 mt-4 ml-auto mr-auto" >Submit</button>
            </div>

            <div className="bcr-cat bcr-tags">
                <h6>Tags</h6>
                <ul>
                    <li>AI for everyone</li>
                    <li>Networks and deep learning</li>
                    <li>Learning with python</li>
                    <li>Financial markets</li>
                    <li>Speak English Professionally</li>
                    <li>Datascience</li>
                    <li>Computer science</li>
                    <li>Business and Management</li>
                    <li>Nature & Environment</li>
                </ul>
            </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
