import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Service from "./Service";
import style from "./service.module.css";

const Services = () => {
  const [data, setData] = useState([]);
  const [tribe, setTribe] = useState("H");
  useEffect(() => {
    fetch("./Fakedata.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  const remaining = data.filter((sort) => sort.category === tribe);
  return (
    <Box sx={{ flexGrow: 1, my: "100px" }}>
      <Box className={style.headline} sx={{ textAlign: 'center' }}>
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          IMan <span style={{ color: "#df0e0e" }}>X</span>press
        </Typography>
        <Typography variant="body2">
          Emergency? Deliver via parcel The only solution for fastest parcel
          delivery in less time. <br /> Your needs are the most important thing
          to us.
        </Typography>
      </Box>
      <Box
        className={style.filter_icon_wrapper}
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <Box onClick={() => setTribe("H")} className={style.bike_box}>
          <img
            src=" https://pathao.com/bn/wp-content/themes/webpathao/assets/images/menu/rides.png?v=26.4.20"
            alt=""
          />
          <Typography variant="h6">Ride sharing</Typography>
        </Box>
        <Box onClick={() => setTribe("F")} className={style.food_box}>
          <img
            src="https://pathao.com/bn/wp-content/themes/webpathao/assets/images/menu/food.png?v=26.4.20"
            alt=""
          />
          <Typography variant="h6">Food</Typography>
        </Box>
        <Box onClick={() => setTribe("C")} className={style.car_box}>
          <img
          style={{borderRadius:"5px"}}
          width="40px"
            src="https://thumbs.dreamstime.com/b/superstore-super-mall-isolated-vector-icons-can-be-modify-any-style-125798400.jpg"
            alt=""
          />
          <Typography variant="h6">Super shop</Typography>
        </Box>
        
        <Box onClick={() => setTribe("D")} className={style.delivery_box}>
          <img
          style={{borderRadius:"5px"}}
          width="45px"
            src="https://media.istockphoto.com/vectors/medicine-icon-vector-illustration-medicine-vector-illustration-icon-vector-id1223737356"
            alt=""
          />
          <Typography variant="h6">Medicine</Typography>
        </Box>
      </Box>
      <Container fixed>
        <Grid spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {remaining.map((serviceData,index) => (
            <Service
            key={index}
              serviceData={serviceData}
              
            ></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
