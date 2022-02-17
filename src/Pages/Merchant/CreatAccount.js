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
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const CreatAccount = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
                {...register("storeName")}
              />
              <TextField
                label="Owner’s Name"
                required
                type="text"
                sx={{ mt: 2, width: "100%" }}
                variant="outlined"
                {...register("ownersName")}
              />
              <TextField
                required
                label="Mobile Number"
                type="number"
                sx={{ mt: 2, width: "100%" }}
                variant="outlined"
                {...register("mobileNumber")}
              />
              <TextField
                required
                label="Email Address "
                type="email"
                sx={{ my: 2, width: "100%" }}
                variant="outlined"
                {...register("email ")}
              />
            </Box>{" "}
            <Box sx={{ textAlign: "left", my: 3 }}>
              <Button variant="outlined" color="warning" type="submit">
                Create Account
              </Button>
            </Box>
          </form>
          {error && (
            <Alert sx={{ my: 2 }} severity="error">
              Password not matched.
            </Alert>
          )}
          {success && (
            <Alert sx={{ my: 2 }} severity="success">
              Account successfully created.
            </Alert>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default CreatAccount;
