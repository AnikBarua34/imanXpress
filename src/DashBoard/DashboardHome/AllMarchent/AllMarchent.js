import { Typography } from "@mui/material";
import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import axios from "axios";
import { Button } from "@mui/material";
import { RiDeleteBin5Fill } from "react-icons/ri";
const AllMarchent = () => {
  const [marchent, setMarchent] = useState([]);
  const [partnerApi, setPartnerApi] = useState([]);
  fetch("https://limitless-sea-74898.herokuapp.com/api/auth/getmerchantuser")
    //   fetch("https://limitless-sea-74898.herokuapp.com/api/auth/getmerchantuser")
    .then((res) => res.json())
    .then((data) => setMarchent(data));
  const handleMerchant = (id) => {
    const confirmMsg = window.confirm("Would you like to delete this partner");
    if (confirmMsg) {
      console.log(id);
      axios
        .delete(
          `https://limitless-sea-74898.herokuapp.com/api/auth/deleteMerchant/${id}`,
          //   `https://limitless-sea-74898.herokuapp.com/api/auth/getmerchantuser/deleteMerchant/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log("deletedCount", res.data.deletedCount);
          console.log(res.data);
          const withOutDeletedpartner = partnerApi.filter(
            (partner) => partner._id !== id
          );
          setPartnerApi(withOutDeletedpartner);
          alert("Merchant deleted successfully!");
        })
        .catch((err) => console.log(err));
    } else {
      alert("Don't worry you Merchant is safe now");
    }
  };
  return (
    <div>
      <Typography variant="h5" sx={{ mt: 5 }}>
        Our All Marchent- {marchent.length}
      </Typography>
      <Table className="table" style={{ marginTop: "15px" }}>
        <Thead className="thead">
          <Tr>
            <Th>Merchant ID</Th>
            <Th>Merchant Name</Th>
            <Th>Merchant Email</Th>
            <Th>Phone</Th>
            <Th>Image</Th>
            <Th>Category</Th>
            <Th>Delete Merchant</Th>
          </Tr>
        </Thead>
        <Tbody>
          {marchent.map(
            ({
              name,
              email,
              password,
              _id,
              date,
              image,
              mobileNumber,
              category,
            }) => (
              <Tr key={_id} className="tableData">
                <Td> {_id} </Td>
                <Td> {name} </Td>
                <Td>{email}</Td>
                <Td>{mobileNumber}</Td>
                <Td>
                  {" "}
                  <img src={image} alt="" width="150px" />{" "}
                </Td>
                <Td>{category}</Td>
                <Td>
                  <button
                    style={{ color: "#d50000", fontSize: "20px" }}
                    onClick={() => handleMerchant(_id)}
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

export default AllMarchent;
