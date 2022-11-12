import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import "./findorderbyID.css";
import InputAdornment from "@mui/material/InputAdornment";
import { FaSearch } from "react-icons/fa";
import {
  Box,
  Button,
  Container,
  TextField,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

const FindOrdersById = ({ darkMode }) => {
  const [searchTem, setSearchTerm] = useState("");
  const [orders, setOrders] = useState([]);
  const [orderId, setOrderId] = useState("");
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    fetch(`https://limitless-sea-74898.herokuapp.com/api/payNow/allorders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  // update delivery_status
  const onSubmit = (data) => {
    console.log(data, orderId);
    fetch(
      `https://limitless-sea-74898.herokuapp.com/api/payNow/statusUpdate/${orderId}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          // alert('Deleted Successfully !')
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Delivery Updated SuccessFully",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  const handleApprove = (id) => {
    setOrderId(id);
    console.log(id);
  };
  return (
    <div>
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
            Search an ORDER
          </Typography>
          <Typography color="text.secondary" sx={{ textAlign: "center" }}>
            you can simple copy and paste the customer tran id here and then
            press enter{" "}
          </Typography>
          <TextField
            label="Search an order here"
            placeholder="Search an order with a tran_id"
            required
            sx={{ mt: 2, width: "100%" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaSearch style={{ fontSize: "30px" }} />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </Paper>
      </Box>
      <Table className="table" style={{ marginTop: "15px" }}>
        <Thead className="thead">
          <Tr>
            <Th>Customer Name</Th>
            <Th>Delivery Status</Th>
            <Th>Tran_ID</Th>
            <Th>Payment Status</Th>
            <Th>Total Amount</Th>
            <Th>Contact Number</Th>
            <Th>Address</Th>
            <Th>City</Th>
            <Th>Note</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders
            .filter((val) => {
              if (val.tran_id.includes(searchTem)) {
                return {};
              } else if (searchTem === "") {
                return "";
              }
            })
            .map(
              ({
                cus_name,
                _id,
                tran_id,
                payment_status,
                total_amount,
                cus_phone,
                date,
                delivery_status,
                product_details,
                streetAddress,
                note,
                cus_city,
              }) => {
                if (tran_id === searchTem) {
                  return (
                    <Tr key={_id} className="tableData">
                      <Td> {cus_name} </Td>
                      <Td
                        className={`${
                          delivery_status === "processing"
                            ? "processing"
                            : "pickedUp"
                        }`}
                      >
                        {delivery_status}
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <select
                            onClick={() => handleApprove(_id)}
                            {...register("delivery_status")}
                          >
                            <option value="Picked up">Picked up</option>
                            <option value="Delivered">Delivered</option>
                          </select>

                          <input type="submit" />
                        </form>
                      </Td>
                      <Td>{tran_id}</Td>
                      <Td
                        className={`${
                          payment_status === "Success" ? "success" : "pending"
                        }`}
                      >
                        {payment_status}
                      </Td>
                      <Td>{total_amount} taka</Td>
                      <Td>{cus_phone}</Td>
                      <Td>{streetAddress}</Td>
                      <Td>{cus_city}</Td>
                      <Td>{note}</Td>
                    </Tr>
                  );
                } else if (searchTem === "") {
                  return "";
                }
              }
            )}
        </Tbody>
      </Table>
    </div>
  );
};

export default FindOrdersById;
