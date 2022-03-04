import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./Component/MerchanterProduct/ProductPage";
import AddProducts from "./DashBoard/AddCourse/AddProducts";
import Admin from "./DashBoard/Admin/Admin";
import AllProducts from "./DashBoard/AllCourses/AllProducts";
import Nav from "./DashBoard/Dashboard/Dashboard";
import DashboardHome from "./DashBoard/DashboardHome/DashboardHome";
import PaymentDash from "./DashBoard/PaymentDash/PaymentDash";
import Review from "./DashBoard/Review/Review";
import UserOrder from "./DashBoard/UserOrder/UserOrder";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import BlogsHome from "./Component/Blogs/BlogsHome/BlogsHome";
import BlogDetails from "./Component/Blogs/BlogDetails/BlogDetails";
import Merchant from "./Pages/Merchant/Merchant";
import Rider from "./Pages/Rider/Rider";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AboutUs from './Pages/AboutUs/AboutUs';
import "./App.css";
import AddBlog from "./DashBoard/DashboardHome/AddBlog/AddBlog";
import UpdateBlog from "./DashBoard/DashboardHome/AddBlog/UpdateBlog/UpdateBlog";
import ManageBlog from "./DashBoard/DashboardHome/ManageBlog/ManageBlog";
function App() {
  return (
    <div>
      <Router>
         <Routes>
             <Route path="/" element={<Home></Home>}></Route>
             <Route path="/login" element={<Login></Login>}></Route>
             <Route path="/register" element={<Register></Register>}></Route>
             <Route path="/moreBlogs" element={<BlogsHome></BlogsHome>}></Route>
             <Route path="/blogDetails/:id" element={<BlogDetails></BlogDetails>}></Route>
             <Route path="/merchant" element={<Merchant></Merchant>}></Route>
            <Route path="/rider" element={<Rider></Rider>}></Route>
            <Route path="/moreBlogs" element={<BlogsHome></BlogsHome>}></Route>
             <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
          <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
          <Route
            path="/product/:productDetail"
            element={<ProductPage />}
          ></Route>
          <Route path="/dashboard" element={<Nav />}>
            <Route
              path="/dashboard/dashboardHome"
              element={<DashboardHome />}
            ></Route>
            <Route path="/dashboard/make-admin" element={<Admin />}></Route>
            <Route path="/dashboard/userOrders" element={<UserOrder />}></Route>
            <Route
              path="/dashboard/add-products"
              element={<AddProducts />}
            ></Route>
            <Route
              path="/dashboard/all-products"
              element={<AllProducts />}
            ></Route>
            <Route path="/dashboard/rate-us" element={<Review />}></Route>
            <Route path="/dashboard/payment" element={<PaymentDash />}></Route>
            <Route path="/dashboard/addBlog" element={<AddBlog />}></Route>
            <Route path="/dashboard/manageBlog" element={<ManageBlog/>}></Route>

          </Route>
          <Route path="/updateBlog" element={<UpdateBlog></UpdateBlog>}></Route>
         </Routes>
        
      </Router>
    </div>
  );
}
export default App;
