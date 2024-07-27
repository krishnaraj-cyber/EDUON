import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FaUsers} from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";

const Sidebar = () => {
  return (
    <>
      <article className="sidebar">
        <div className="mt-12">
          <div className="dash-adprofile">
            <img src="/images/user-icon.png" alt="" />
            <p> Eduon</p>
            <p> admin@eduon.com</p>
            <p>+(514) 312-5678</p>
          </div>
          <h3>Admin Dashboard</h3>
          <div className="dash-slide-links">
            <Link to="/admin/admin-dashboard">
              <p>Users Details</p>
            </Link>
          </div>
        </div>
      </article>


      <article className="sidebar-mobl">
          <div className="side-dash-mobl-icon">
            <Link to="">
              <p><MdAdminPanelSettings size={40} color="#e0e0e0"/></p>
            </Link>
            <Link to="/admin/admin-dashboard">
              <p><FaUsers size={40} color="#5f6368"/></p>
            </Link>
          </div>
      </article>
    </>
  );
};

export default Sidebar;
