import React from "react";
import "./infocard.css";
import { UilPen } from "@iconscout/react-unicons";
import { useState } from "react";
import ProfileModal from "../profilemodal/ProfileModal";
import { Link } from "react-router-dom";
const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="InfoCard">
      <div className="infohead">
        <h4>Your Info</h4>
        <div>
          <UilPen width="2rem" height="1.2rem" onClick={() => setModalOpened(true)} />
          <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Status : </b>
        </span>
        <span> In a Relationship</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in : </b>
        </span>
        <span>America</span>
      </div>

      <div className="info">
        <span>
          <b>Works at : </b>
        </span>
        <span>Amazon Campony</span>
      </div>
      <Link to={"/auth"} className="float_right">
        <button className="button logout-button">Log Out</button>
      </Link>
    </div>
  );
};

export default InfoCard;
