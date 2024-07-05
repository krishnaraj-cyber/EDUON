import ContactPage from "../../components/HomePage/ContactPage";
import { Link } from "react-router-dom";







export default function Header () {

    return(
          <>
                <header>
                <div class="logo">
                        <a href="#link-home"><img class="eduonlogo" src="src\assets\Images\eduonlogo.png"/></a>
                </div>
                <div class="nav-items showmwnu hide">
                        <div><Link to="" >Home</Link></div>
                        <div><a href="#link-courses">Course</a></div>
                        <div><a href="#link-home">Pages</a></div>
                        <div><a href="#link-home">Shop</a></div>
                        <div><a href="">Blog</a></div>
                        <div><Link to="/contactpage-link" >Contact</Link></div>
                        <div><Link to="/"><button class="mobile-login-button wwwwwwwwww">Login/Register</button></Link>
                        </div>


                </div>
                <div class="search-cart-button showmenu hide">
                        <div><a href=""><img src="src\assets\Images\icons8-search-24.png" alt=""/></a></div>
                        <div><a href=""><img src="src\assets\Images\/icons8-cart-24.png"/></a></div>
                        <div><Link to="/login_page"><button class="login--button">Login/Register</button></Link></div>
                </div>

        </header>
        <div>
                <button class="menu">
                        <div class="menuline"></div>
                        <div class="menuline"></div>
                        <div class="menuline"></div>
                </button>
        </div>

        
          
          </>
        
    )
}