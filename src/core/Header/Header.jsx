



import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../shared/component/AuthContext';

export default function Header() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <header>
        <div className="logo">
          <a href="#link-home"><img className="eduonlogo" src="/images/eduonlogo.png" alt="Logo" /></a>
        </div>
        <div className={`nav-items ${menuOpen ? 'show' : 'hide'}`}>
          <div><Link to="/">Home</Link></div>
          <div><Link to="/updated-course-link">Course</Link></div>
          <div><Link to="/blog-_link">Blog</Link></div>
          <div><Link to="/contactpage-link">Contact</Link></div>
          <div>
            {isAuthenticated ? (
              <button className="mobile-login-button" onClick={handleLogout}>Logout</button>
            ) : (
              <Link to="/login_page">
                <button className="mobile-login-button">Login</button>
              </Link>
            )}
          </div>
        </div>
        <div className="search-cart-button showmenu hide">
          <div>
            {isAuthenticated ? (
              <button className="login--button" onClick={handleLogout}>Logout</button>
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
