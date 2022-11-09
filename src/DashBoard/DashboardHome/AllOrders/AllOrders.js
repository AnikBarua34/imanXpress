import React from "react";
import { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Typography } from "@mui/material";
import "./AllOrders.css";
import axios from "axios";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const { register, handleSubmit } = useForm();
  const [orderId, setOrderId] = useState("");
  useEffect(() => {
    fetch(`http://localhost:8080/api/payNow/allorders`)
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
      });
  }, []);

  const handleDelete = (id) => {
    // Delete Confirmation
    const confirmDelete = window.confirm(
      "Are you sure ? to delete this order !"
    );
    if (confirmDelete) {
      // deleting product by id
      axios
        .delete(`http://localhost:8080/api/payNow/deleteorders/${id}`)
        .then((res) => {
          alert(res.data.success);
          const presentOrder = allOrders.filter((book) => book._id !== id);
          setAllOrders(presentOrder);
        })
        .catch((err) => console.log(err));
    }
  };
  // update delivery_status
  const onSubmit = (data) => {
    console.log(data, orderId);
    fetch(`http://localhost:8080/api/payNow/statusUpdate/${orderId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
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
    <div className="TotalOrder">
      <Typography varient="h3">Total Order: {allOrders.length}</Typography>
      <Table className="table" style={{ marginTop: "15px" }}>
        <Thead className="thead">
          <Tr>
            <Th>Customer Name</Th>
            <Th>Delivery Status</Th>
            <Th>Tran ID</Th>
            <Th>Payment Status</Th>
            <Th>Total Amount</Th>
            <Th>Contact Number</Th>
            <Th>Date</Th>
            <Th>Delete Order</Th>
          </Tr>
        </Thead>
        <Tbody>
          {allOrders.map(
            ({
              cus_name,
              tran_id,
              _id,
              payment_status,
              total_amount,
              cus_phone,
              date,
              delivery_status,
            }) => (
              <Tr key={_id} className="tableData">
                <Td> {cus_name} </Td>
                <Td
                  className={`${
                    delivery_status === "processing" ? "processing" : "pickedUp"
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
                <Td>{date}</Td>
                <Td>
                  <button
                    style={{ color: "#d50000", fontSize: "20px" }}
                    onClick={() => handleDelete(_id)}
                  >
                    <RiDeleteBin5Fill />
                  </button>
                </Td>
              </Tr>
            )
          )}
        </Tbody>
      </Table>
    </div>
  );
};

export default AllOrders;
