import React from "react";
import Services from "../../Component/BikeServices/Services";
import Blogs from "../../Component/Blogs/Blogs";
import OurPartnerSlider from "../../Component/OurPartner/OurPartner";
import Products from "../../Component/Products/Products";
import Reviews from "../../Component/Reviews/Reviews";
import MySlider from "../../Component/Slider/MySlider";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import ContactUs from "../ContactUs/ContactUs";
import Gallery from "../Gallery/Gallery";
import useAuth from "./../../Hooks/useAuth";
const Home = () => {
  const { darkMode } = useAuth();

  return (
    <div
      className={darkMode ? "fontColor" : ""}
      style={{ backgroundColor: darkMode ? "black" : "white" }}
    >
      <title>IMan Xpress || Home</title>
      <Navbar />
      <MySlider />

      <Products />
      <Services />
      <Blogs></Blogs>
      <Reviews></Reviews>
      <OurPartnerSlider></OurPartnerSlider>
      <ContactUs></ContactUs>
      <Gallery />
      <Footer></Footer>
    </div>
  );
};

export default Home;
