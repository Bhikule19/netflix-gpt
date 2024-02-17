import React from "react";
import { Link } from "react-router-dom";
import netflix_logo from "../images/Netflix_Logo_PMS.png";

const Header = () => {
  return (
    <div className="bg-gradient-to-b from-black  border-b-[transparent] left-0 top-0 absolute w-full h-[90px] z-10">
      <Link className="ml-[3%] inline-block leading-[90px] align-middle">
        <img
          src={netflix_logo}
          alt="Logo Netflix"
          className="h-24 w-[220px] align-middle"
        />
      </Link>
    </div>
  );
};

export default Header;
