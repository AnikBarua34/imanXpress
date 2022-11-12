import "./Dashboardhome.css";
import React, { useState, useEffect } from "react";
import "firebase/compat/firestore";
import Userchatmodal from "../../../Component/Modal/Userchatmodal";
import rider2 from "../../..//img/rider2.jpg";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";

function AllAdminInDashboard({ darkMode }) {
  const [allriders, setAllriders] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [riderinfo, setRiderinfo] = useState({});
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const { loginstatus } = useAuth();
  console.log(loginstatus);

  useEffect(() => {
    const d = new Date();
    let time = d.getTime();
    console.log(time);
    axios
      .get(
        "https://limitless-sea-74898.herokuapp.com/api/authgeneral/getalluserswithadmin"
      )
      .then((res) => setAllriders(res.data.admins))
      .catch((err) => console.log(err));
  }, []);

  console.log(loginstatus);

  const chatwithrider = (adminid) => {
    // https://limitless-sea-74898.herokuapp.com/
    axios
      .get(
        `https://limitless-sea-74898.herokuapp.com/api/authgeneral/getalluserswithadmin/${adminid}`
      )
      .then((res) => setRiderinfo(res.data.admin))
      .catch((err) => console.log(err));

    handleOpen();
  };
  return (
    <>
      {" "}
      <title>IMan Xpress || All Riders</title>
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginTop: "18px",
            marginLeft: "27px",
            color: `${darkMode ? "white" : "#323232"}`,
            mr: 3,
            textAlign: "center",
          }}
        >
          Chat with Admin
        </Typography>
        <Typography
          color="text.secondary"
          sx={{ marginLeft: "27px", textAlign: "center" }}
        >
          our all available riders are here to pick up products for delivery{" "}
        </Typography>
      </Box>
      <Container style={{ marginTop: "30px", marginBottom: "30px" }}>
        <Grid container spacing={2}>
          {allriders.map((info) => {
            return (
              <Grid item lg={3} md={4} sm={6} xs={12} key={info._id}>
                <div className="card-container">
                  <span
                    className={`${
                      info.login_status === 0 ? "pro" : "pro-online"
                    }`}
                  >
                    {info.login_status === 0 ? "offline" : "online"}
                  </span>
                  <img
                    className="round"
                    src={rider2}
                    height="120px"
                    width="120px"
                    alt="user"
                  />
                  <h3>{info.fname}</h3>
                  <h6>{info.address}</h6>

                  <div className="buttons">
                    <Button
                      variant="outlined"
                      onClick={() => chatwithrider(info._id)}
                    >
                      Chat with rider
                    </Button>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Userchatmodal
        openModal={openModal}
        handleClose={handleClose}
        riderallinfo={riderinfo}
      />
    </>
  );
}

export default AllAdminInDashboard;
