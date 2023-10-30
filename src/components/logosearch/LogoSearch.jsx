import React from "react";
import "./logosearch.css";
import Logo from "../../img/logo.png";
import { UilSearch } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const LogoSearch = () => {
  return (
    <>
      <div className="LogoSearch">
        <div className="logo">
          <Link className="logo" to={"/"}>
            <img src={Logo} alt="" />
          </Link>
        </div>

        <div className="search">
          <input type="text" placeholder="#Explore" />
          <div className="s-icon">
            <UilSearch />
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoSearch;
