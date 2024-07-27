import { Outlet } from "react-router-dom"
import Sidebar from "../shared/Sidebar/Sidebar"


const AdMain = () => {
  return (
    <>
    <Sidebar/>
    <main className="sidebar-fr-all">
        <Outlet/>
    </main>
    </>
  )
}

export default AdMain