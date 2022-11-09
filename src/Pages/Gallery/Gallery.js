import { Button, Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import Accountinformation from "../../Component/Modal/Accountinformation";
import "./Gallery.css";
import anik from "../../img/anik.jpg";
import shop1 from "../../img/shop1.jpg";
import shop2 from "../../img/shop2.jpg";
import shop3 from "../../img/shop3.jpg";
import rider from "../../img/rider.jpg";
function Gallery() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const [information, setInformation] = useState("");

  const merchantaccount = (merchant) => {
    setInformation(merchant);
    handleOpen();
  };

  const generalaccount = (general) => {
    setInformation(general);
    handleOpen();
  };

  const ridermerchantaccount = (rider) => {
    setInformation(rider);
    handleOpen();
  };
  return (
    <>
      <Container>
        <header className="main-header clearfix">
          <h1 className="name">
            Our 3D{" "}
            <span style={{ marginLeft: "5px" }}> Account information</span>
          </h1>
        </header>

        <div className="content clearfix">
          <div className="cube-container">
            <div className="photo-cube">
              <img className="front" src={anik} alt="" />
              <div className="back photo-desc">
                <h3>User account</h3>
                <p>
                  User can open his account from this site and take the various
                  facilities
                </p>
                <Button
                  onClick={() => generalaccount("general")}
                  variant="outlined"
                  style={{ color: "#000", border: "2px solid white" }}
                >
                  All information
                </Button>
              </div>
              <img
                className="left"
                src="https://i.insider.com/5dcc135ce94e86714253af21?width=1000&format=jpeg&auto=webp"
                alt=""
              />
              <img
                className="right"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""
              />
            </div>
          </div>

          <div className="cube-container">
            <div className="photo-cube">
              <img className="front" src={shop1} alt="" />
              <div className="back photo-desc">
                <h3>Merchant Account</h3>
                <p>
                  Merchant can open his account from this site and he can sell
                  his product by this site
                </p>
                <Button
                  onClick={() => merchantaccount("merchant")}
                  variant="outlined"
                  style={{ color: "#000", border: "2px solid white" }}
                >
                  All information
                </Button>
              </div>
              <img className="left" src={shop2} alt="" />
              <img className="right" src={shop3} alt="" />
            </div>
          </div>

          <div className="cube-container">
            <div className="photo-cube">
              <img className="front" src={rider} alt="" />
              <div className="back photo-desc">
                <h3>Rider Account</h3>
                <p>
                  Riders can open his account and he provide ride sharing and
                  delivery services from this site
                </p>
                <Button
                  onClick={() => ridermerchantaccount("rider")}
                  variant="outlined"
                  style={{ color: "#000", border: "2px solid white" }}
                >
                  All information
                </Button>
              </div>
              <img
                className="left"
                src="https://i.postimg.cc/zGmk5V2X/firstimageimanslider.jpg"
                alt=""
              />
              <img
                className="right"
                src="https://www.netsolutions.com/insights/wp-content/uploads/2021/11/essential-features-of-building-an-on-demand-food-ordering-app.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
      <Accountinformation
        openModal={openModal}
        handleClose={handleClose}
        account={information}
      />
    </>
  );
}

export default Gallery;
