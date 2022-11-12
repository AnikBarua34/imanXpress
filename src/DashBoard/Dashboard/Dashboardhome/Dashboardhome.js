import React from "react";
import "./Dashboardhome.css";
import { Box, Paper, Typography } from "@mui/material";
import useAuth from "../../../Hooks/useAuth";

function Dashboardhome() {
  const { user, darkMode } = useAuth();
  const merchant = localStorage.getItem("merchant");
  const merchantinfo = JSON.parse(localStorage.getItem("merchantInfo"));

  const rider = localStorage.getItem("riderToken");
  const riderinfo = JSON.parse(localStorage.getItem("riderInfo"));

  return (
    <>
      <Box>
        <Paper sx={{ p: 5 }} elevation={12}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: `${darkMode ? "white" : "#323232"}`,
              mr: 3,

              textAlign: "center",
            }}
          >
            {user?.email && merchant === null && rider === null ? (
              <Paper>{user?.displayName}</Paper>
            ) : !user.email && rider === null && merchant ? (
              <Paper>{merchantinfo?.name}</Paper>
            ) : !user.email && merchant == null && rider ? (
              <Paper>{riderinfo?.lname}</Paper>
            ) : (
              " "
            )}{" "}
            Welcome to your Dashboard{" "}
          </Typography>
          <Typography color="text.secondary" sx={{ textAlign: "center" }}>
            you can see and update your all process from here{" "}
          </Typography>
        </Paper>
      </Box>
      <div>
        <img
          className="center"
          width="70%"
          src="https://media4.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif"
          alt=""
        />
      </div>
    </>
  );
}

export default Dashboardhome;
