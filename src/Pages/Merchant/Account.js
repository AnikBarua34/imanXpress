import {
    Alert,
    Button,
    Container,
    Divider,
    Grid,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Account() {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        axios.post('http://localhost:8080/api/auth/register',data).then(res=>console.log(res.data)).catch(err=>console.log(err))
    };
    return (
      <div>
      <Grid
        container
        sx={{
          // height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
      <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
              <TextField
                  label="Store Name"
                  required
                  sx={{ mt: 2, width: "100%" }}
                  variant="outlined"
                  {...register("name")}
              />
             
              <TextField
                  required
                  label="email"
                  type="email"
                  sx={{ mt: 2, width: "100%" }}
                  variant="outlined"
                  {...register("email")}
              />
              <TextField
                  required
                  label="password"
                  type="password"
                  sx={{ my: 2, width: "100%" }}
                  variant="outlined"
                  {...register("password")}
              />
          </Box>{" "}
          <Box sx={{ textAlign: "left", my: 3 }}>
              <Button variant="outlined" color="warning" type="submit">
                  Create Account
              </Button>
          </Box>
                </form> 
            </Grid>
        </Grid>
    </div >
  )
}

export default Account