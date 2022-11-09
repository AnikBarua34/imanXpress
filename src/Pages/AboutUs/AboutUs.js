import { Button, Card, CardMedia, Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import anik from "../../img/anik.jpg";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import "./AboutUs.css";
import useAuth from "./../../Hooks/useAuth";

const AboutUs = () => {
  const { darkMode } = useAuth();

  return (
    <div
      className={darkMode ? "fontColor" : ""}
      style={{ backgroundColor: darkMode ? "black" : "white" }}
    >
      <title>IMan Xpress || About us</title>
      <Navbar />

      <Container className="font">
        <Grid sx={{}} container spacing={2}>
          <Grid item xs={12} lg={6} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="420"
                image="https://cdn.dribbble.com/users/2459530/screenshots/8029114/delivery_1-800x600.gif"
                alt="about-us-delivery"
              />
            </Card>
          </Grid>

          <Grid sx={{ my: 5 }} item xs={12} lg={6} md={6}>
            <Typography sx={{ mt: 5, fontWeight: "bold" }} variant="h4">
              About us
            </Typography>
            <Typography variant="p">
              Iman Xpress is a Store and Delivery system website. We care about
              our customers. Customers satisfaction is our best target. We will
              also work to save cusmores money,so we have some planes to keep
              many kind of discount offers in our system.
            </Typography>
          </Grid>
        </Grid>

        <Grid sx={{ mt: 2 }} container spacing={2}>
          <Grid sx={{ my: 5 }} item xs={12} lg={6} md={6}>
            <Typography
              sx={{ mt: 5, fontWeight: "bold", textAlign: "center" }}
              variant="h4"
            >
              Our Mission
            </Typography>
            <Typography variant="p">
              We want to provide the best service and we will make our service
              more user friendly. Also we will work to save everyone’s time,
              because time is very valuable for everyone and we will work hardly
              to elemenate the unemployment from our country.
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
            <Card sx={{ boxShadow: 5 }}>
              <CardMedia
                component="img"
                height="420"
                image="https://i.pinimg.com/originals/f6/34/01/f634017e8277d18a163603575ca753e3.gif"
                alt="about-us-delivery"
              />
            </Card>
          </Grid>
        </Grid>

        <Typography
          sx={{
            textAlign: "center",
            m: 2,
            mt: 3,
            fontWeight: "bold",
            borderBottom: "2px solid black",
          }}
          variant="h5"
        >
          IMAN <span className="x">X</span>PRESS
          <span className="developer">DEVELOPERS</span>
        </Typography>

        {/* Developers  */}
        <Grid container spacing={2} style={{ marginBottom: "20px" }}>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            {/* Anik  */}
            <Card sx={{ boxShadow: 5, textAlign: "center" }}>
              <CardMedia
                component="img"
                height="340"
                image={anik}
                alt="about-us-delivery"
              />
              <Typography sx={{ fontWeight: "bold" }} variant="h6">
                Anik Barua Turjoy
              </Typography>
              <Typography variant="p">Web Developer</Typography>
              {/* SOcial Links  */}
              <Box sx={{ textAlign: "center" }}>
                <Button sx={{ fontSize: "h6.fontSize" }}>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/turjoy2"
                    rel="noreferrer"
                  >
                    <SiFacebook />
                  </a>
                </Button>
                <Button sx={{ fontSize: "h6.fontSize" }}>
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send/?phone=8801781104445&text&app_absent=0"
                    rel="noreferrer"
                  >
                    <BsWhatsapp />
                  </a>
                </Button>

                <Button sx={{ fontSize: "h6.fontSize" }}>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/anik-barua-097564160/"
                    rel="noreferrer"
                  >
                    <BsLinkedin />
                  </a>
                </Button>

                <Button sx={{ fontSize: "h6.fontSize" }}>
                  <a
                    target="_blank"
                    href="https://github.com/AnikBarua34"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>
                </Button>
              </Box>
            </Card>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            {/* Tushar  */}
            <Card sx={{ boxShadow: 5, textAlign: "center" }}>
              <CardMedia
                component="img"
                height="340"
                image={anik}
                alt="about-us-delivery"
              />
              <Typography sx={{ fontWeight: "bold" }} variant="h6">
                Shaidul Rikan
              </Typography>
              <Typography variant="p">Web Developer</Typography>
              {/* SOcial Links  */}
              <Box sx={{ textAlign: "center" }}>
                <Button sx={{ fontSize: "h6.fontSize" }}>
                  <a
                    target="_blank"
                    href="https://www.facebook.com"
                    rel="noreferrer"
                  >
                    <SiFacebook />
                  </a>
                </Button>
                <Button sx={{ fontSize: "h6.fontSize" }}>
                  <a
                    target="_blank"
                    href="https://www.twitter.com"
                    rel="noreferrer"
                  >
                    <BsWhatsapp />
                  </a>
                </Button>

                <Button sx={{ fontSize: "h6.fontSize" }}>
                  <a
                    target="_blank"
                    href="https://www.instragram.com"
                    rel="noreferrer"
                  >
                    <BsLinkedin />
                  </a>
                </Button>

                <Button sx={{ fontSize: "h6.fontSize" }}>
                  <a
                    target="_blank"
                    href="https://www.instragram.com"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default AboutUs;
