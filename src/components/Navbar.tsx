import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
//icons
import { MdOutlineArrowDropDown } from "react-icons/md";
import { TfiBell } from "react-icons/tfi";
import { CgSearch } from "react-icons/cg";
import profilepicture from "../images/profilepicture.svg";
import logo from "../images/logo.svg";
import {RxHamburgerMenu} from "react-icons/rx";

import SideNav from "./SideNav";
import useWindowDimensions from "./useWindow";


export default function Navbar() {
  // this is a function that navigates to /dashboard using useNavigate as declared
  let navigate = useNavigate();
  function handleClick() {
    navigate("/dashboard");
  }

  const [active, setActive] = useState(false)

  let width: any | null = useWindowDimensions()

  return (
    <>
    <div className="container">
      <section className="logosvg">
        <span onClick={handleClick}>
          <img src={logo} alt="logo" />
        </span>
      </section>
      <section className="input">
        <input placeholder="Search for anything" />
        <div className="searchicon">
          <CgSearch size={20} color="white" />
        </div>
      </section>
      <section className="infos">
        <u>Docs</u>
        <TfiBell
          size={27}
          color="#213F7D"
          style={{ marginRight: "2rem", cursor: "pointer" }}
        />
        <img
          src={profilepicture}
          alt=""
          style={{ borderRadius: "30px", marginRight: "1rem" }}
        />
        <h5>Adedeji</h5>
        <MdOutlineArrowDropDown size={16} style={{ cursor: "pointer" }} />
      </section>
      <section className="hamburger" onClick={() => setActive(!active)}>
      <RxHamburgerMenu size={20}/>
      </section>

    {width.width <= 1240 ?  <div className={active ? 'navsactive' : 'nav'}>
      <section>
      <SideNav />
      </section>
    </div> : ''}
    </div>
    </>
  );
}
