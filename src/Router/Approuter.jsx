import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../core/Main/Main";
import Homepage from "../components/HomePage/Homepage";
import ContactPage from "../components/HomePage/ContactPage";
import LoginPage from "../components/HomePage/LoginPage";

export default function Approuter () {

    return(
       <BrowserRouter>
       <Routes>
        <Route element={<Main/>}>
         <Route path="" element={<Homepage/>}/>
         <Route path="/contactpage-link" element={<ContactPage/>}/>
         <Route path="/login_page" element={<LoginPage/>}/>
        </Route>
       </Routes>
       </BrowserRouter>



     
    )
}