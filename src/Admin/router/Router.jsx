import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../shared/Admin/AdminDashboard";
import AdMain from "../core/AdMain";
import AdminLogin from "../shared/Admin/AdminLogin";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route element={<AdMain />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
