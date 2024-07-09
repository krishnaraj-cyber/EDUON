// import ContactPage from "../../components/HomePage/ContactPage";
// import { Link } from "react-router-dom";

// import React, { useState } from 'react';





// export default function Header () {




//         const [menuOpen, setMenuOpen] = useState(false);

//         const toggleMenu = () => {
//           setMenuOpen(!menuOpen);
//         };
      



//     return(
//           <>
//                 <header>
//                 <div class="logo">
//                         <a href="#link-home"><img class="eduonlogo" src="/images/eduonlogo.png"/></a>
//                 </div>
//                  {/* <div class="nav-items showmwnu hide">  */}
//                  <div className={`nav-items ${menuOpen ? 'show' : 'hide'}`}>


//                         <div><Link to="" >Home</Link></div>
//                         <div><a href="#link-courses">Course</a></div>
//                         <div><a href="#link-home">Pages</a></div>
//                         <div><a href="#link-home">Shop</a></div>
//                         <div><a href="">Blog</a></div>
//                         <div><Link to="/contactpage-link" >Contact</Link></div>
//                         <div><Link to="/login_page"><button class="mobile-login-button wwwwwwwwww">Login/Register</button></Link>
//                         </div>


//                 </div>
//                 <div class="search-cart-button showmenu hide">
//                         <div><a href=""><img src="images/icons8-search-24.png" alt=""/></a></div>
//                         <div><a href=""><img src="images/icons8-cart-24.png"/></a></div>
//                         <div><Link to="/login_page"><button class="login--button">Login/Register</button></Link></div>
//                 </div>

//         </header>
//         <div>
//                 <button class="menu" onClick={toggleMenu}>
//                         <div class="menuline"></div>
//                         <div class="menuline"></div>
//                         <div class="menuline"></div>
//                 </button>
//         </div>

        
          
//           </>
        
//     )
// }






import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../shared/component/AuthContext';

export default function Header() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <div className="logo">
          <a href="#link-home"><img className="eduonlogo" src="/images/eduonlogo.png" alt="Logo" /></a>
        </div>
        <div className={`nav-items ${menuOpen ? 'show' : 'hide'}`}>
          <div><Link to="/">Home</Link></div>
          <div><a href="#link-courses">Course</a></div>
          {/* <div><a href="#link-home">Pages</a></div>
          <div><a href="#link-home">Shop</a></div> */}
          <div><Link to="/blog-_link">Blog</Link></div>
          <div><Link to="/contactpage-link">Contact</Link></div>
          <div>
            {isAuthenticated ? (
              <button className="mobile-login-button wwwwwwwwww" onClick={logout}>Logout</button>
            ) : (
              <Link to="/login_page">
                <button className="mobile-login-button wwwwwwwwww">Login/Register</button>
              </Link>
            )}
          </div>
        </div>
        <div className="search-cart-button showmenu hide">
          {/* <div><a href=""><img src="images/icons8-search-24.png" alt="Search" /></a></div> 
          <div><a href=""><img src="images/icons8-cart-24.png" alt="Cart" /></a></div>*/}
          <div>
            {isAuthenticated ? (
              <button className="login--button" onClick={logout}>Logout</button>
            ) : (
              <Link to="/login_page">
                <button className="login--button">Login</button>
              </Link>
            )}
          </div>
        </div>
      </header>
      <div>
        <button className="menu" onClick={toggleMenu}>
          <div className="menuline"></div>
          <div className="menuline"></div>
          <div className="menuline"></div>
        </button>
      </div>
    </>
  );
}
