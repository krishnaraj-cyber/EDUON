import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../core/Main/Main";
import Homepage from "../components/HomePage/Homepage";
import ContactPage from "../components/HomePage/ContactPage";
import LoginPage from "../components/HomePage/LoginPage";
import CoursePage from "../components/HomePage/CoursePage";
import TopOnlineCourse from "../shared/component/Course/TopOnlineCourse/TopOnlineCourse";
import PopularSubjects from "../shared/component/Course/PopularSubjects/PopularSubjects";

export default function Approuter () {

    return(
       <BrowserRouter>
       <Routes>
        <Route element={<Main/>}>
         <Route path="" element={<Homepage/>}/>
         <Route path="/contactpage-link" element={<ContactPage/>}/>
         <Route path="/login_page" element={<LoginPage/>}/>
         <Route path="/allcourse_categories" element={<CoursePage/>}/>
         <Route path="/top-online-course-list" element={<TopOnlineCourse/>}/>
         <Route path="/popular-subjects-list" element={<PopularSubjects/>}/>
        </Route>
       </Routes>
       </BrowserRouter>



     
    )
}