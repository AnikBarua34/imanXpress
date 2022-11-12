import { Button } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import { red } from "@mui/material/colors";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useState, useEffect } from "react";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { db } from "../../Pages/Login/firebase.init";
import firebase from "firebase/compat/app";
import ScrollableFeed from "react-scrollable-feed";
import "./Userchatmodal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: "3px",
};

export default function Adminchatmodal({
  openModal,
  handleClose,
  riderAllinfo,
}) {
  const [messages, setMessages] = useState([]);
  const [filterdatas, setFilterdatas] = useState([]);

  const [adminData, setAdminData] = useState({});

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    data.riderId = riderAllinfo?._id;
    data.adminid = adminData?._id;
    data.status = "admin";

    db.collection("messages").add({
      message: data,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    reset();
  };

  useEffect(() => {
    const riderinfo = JSON.parse(localStorage.getItem("riderInfo"));
    setAdminData(riderinfo);
  }, []);

  useEffect(() => {
    db.collection("messages")

      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, allmessage: doc.data() }))
        )
      );
  }, []);

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 100,
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
            <div class="chatbox-holder" style={{ marginTop: "50px" }}>
              <div class="chatbox">
                <div class="chatbox-top">
                  <div class="chatbox-avatar">
                    <a
                      target="_blank"
                      href="https://static.vecteezy.com/system/resources/thumbnails/008/296/405/small/rider-front-view-japanese-art-vector.jpg"
                    >
                      <img src="https://static.vecteezy.com/system/resources/thumbnails/008/296/405/small/rider-front-view-japanese-art-vector.jpg" />
                    </a>
                  </div>
                  <div class="chat-partner-name">
                    <span class="status online"></span>
                    <a target="_blank" href="https://www.facebook.com/mfreak">
                      {riderAllinfo.email}
                    </a>
                  </div>
                  <div class="chatbox-icons">
                    <a onClick={handleClose}>
                      <i class="fa fa-close"></i>
                    </a>
                  </div>
                </div>
                <div className="chat-messages">
                  <ScrollableFeed>
                    {messages
                      ?.filter(
                        (data) =>
                          data.allmessage.message.adminid ===
                            riderAllinfo?._id &&
                          data.allmessage.message.riderid === adminData?._id
                      )
                      .map((el) => {
                        return (
                          <>
                            <div className="message-box-holder">
                              <div className="message-sender">
                                {el.allmessage.message.status == "rider"
                                  ? "me"
                                  : riderAllinfo.email}
                              </div>
                              <div className="message-box message-partner">
                                {el.allmessage.message.textmessage}
                              </div>
                            </div>
                          </>
                        );
                      })}
                  </ScrollableFeed>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div class="chat-input-holder">
                    <textarea
                      className="chat-input"
                      {...register("textmessage", { required: true })}
                    ></textarea>
                    <input type="submit" value="Send" class="message-send" />
                  </div>
                  <Typography style={{ color: "red", fontSize: "15px" }}>
                    {" "}
                    {errors.textmessage && <span>This field is required</span>}
                  </Typography>
                </form>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
