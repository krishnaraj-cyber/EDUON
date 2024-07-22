


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../core/Main/Main";
import Homepage from "../components/HomePage/Homepage";
import ContactPage from "../components/HomePage/ContactPage";
import LoginPage from "../components/HomePage/LoginPage";
import ForgotPassword from "../shared/component/Login/ForgotPassword";
import ResetPassword from "../shared/component/Login/ResetPassword";
import CoursePage from "../components/HomePage/CoursePage";
import TopOnlineCourse from "../shared/component/Course/TopOnlineCourse/TopOnlineCourse";
import PopularSubjects from "../shared/component/Course/PopularSubjects/PopularSubjects";
import { BlogPage } from "../components/HomePage/BlogPage";
import Register from "../shared/component/Login/Register";
import { UpdatedCourse } from "../shared/component/Course/UpdatedCoursecontent/UpdatedCourse";
import { DataScience } from "../shared/component/Course/UpdatedCoursecontent/DataScience/DataScience";

import { AuthProvider } from '../shared/component/AuthContext';
import ProtectedRoute from '../shared/component/ProtectedRoute';

export default function Approuter() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Main />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/blog-_link" element={<BlogPage />} />
            <Route path="/contactpage-link" element={<ContactPage />} />
            <Route path="/login_page" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/resetPassword/:token" element={<ResetPassword />} />
            {/* <Route path="/updated-course-link" element={<ProtectedRoute element={<UpdatedCourse />} />} /> */}
            <Route path="/updated-course-link" element={<UpdatedCourse />} />
            {/* <Route path="/subject-datascience" element={<ProtectedRoute element={<DataScience />} />} /> */}
            <Route path="/subject-datascience" element={<DataScience />} />
            <Route path="/allcourse_categories" element={<CoursePage />} />
            <Route path="/top-online-course-list" element={<TopOnlineCourse />} />
           <Route path="/popular-subjects-list" element={<PopularSubjects />} /> 
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
