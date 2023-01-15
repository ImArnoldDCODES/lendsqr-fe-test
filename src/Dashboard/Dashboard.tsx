import { useState, useEffect } from "react";
import "./Dashboard.scss";
//packages
import axios from "axios";
import { useNavigate } from "react-router-dom";

//components
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import Userdetails from "../components/Userdetails";
import FIlter from "../components/Filter";
import userProps from "../components/Interface";

//icons
import view from "../icons/view.svg";
import useractive from "../icons/useractive.svg";
import userinactive from "../icons/userinactive.svg";
import dropdown from "../icons/dropdown2.svg";
import dropdown2 from "../icons/dropdown.svg";
import next from "../icons/next.svg";
import previous from "../icons/previous.svg";
import { BiDotsVerticalRounded } from "react-icons/bi";

// details popup
const Details = (details: any) => {
  const [mouse, setMouse] = useState(false);

  const number = details.details;

  // this is a function that navigates to /dashboard using useNavigate as declared
  let navigate = useNavigate();
  function handleClick() {
    navigate(`/dashboard/user/${number}`);
  }

  return (
    <section>
      <div
        className={mouse ? "details-popup-none" : "details-popup"}
        onMouseLeave={() => setMouse(true)}
      >
        <ul>
          <span
            onClick={handleClick}
            style={{ textDecoration: "none", color: "#545f7d" }}
          >
            <li>
              <img src={view} alt="" />
              View Details
            </li>
          </span>
          <li>
            <img src={userinactive} alt="" />
            Blacklist
          </li>
          <li>
            <img src={useractive} alt="" />
            Activate User
          </li>
        </ul>
      </div>
    </section>
  );
};

export default function Dashboard() {
  const [usersdata, setUsersdata] = useState<userProps>();
  const [displaydetails, setdisplaydetails] = useState(0);
  const [displayfilter, setdisplayfilter] = useState(false);

  //this function gets me a specific id when clicked
  const active = (id: any) => {
    if (displaydetails === id) {
      return setdisplaydetails(0);
    }
    setdisplaydetails(id);
  };

  useEffect(() => {
    axios
      .get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then(function (response) {
        // handle success
        setUsersdata(response?.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="dashboard">
      <Navbar />
      <div className="split">
        <SideNav />
        <div className="dash">
          <Userdetails />
          <section>
            <div className="box">
              <table className="table">
                <thead>
                  {displayfilter ? <FIlter /> : null}
                  <tr>
                    <th>
                      ORGANIZATION
                      <img
                        onClick={() => setdisplayfilter(!displayfilter)}
                        src={dropdown}
                        alt=""
                        style={{ marginLeft: "12px" }}
                      />{" "}
                      <span style={{ paddingLeft: "15rem", opacity: "0" }}>
                        .
                      </span>
                    </th>
                    <th>
                      USERNAME{" "}
                      <img
                        onClick={() => setdisplayfilter(!displayfilter)}
                        src={dropdown}
                        alt=""
                        style={{ marginLeft: "12px" }}
                      />
                      <span style={{ paddingLeft: "10rem", opacity: "0" }}>
                        .
                      </span>
                    </th>
                    <th>
                      EMAIL{" "}
                      <img
                        onClick={() => setdisplayfilter(!displayfilter)}
                        src={dropdown}
                        alt=""
                        style={{ marginLeft: "12px" }}
                      />
                      <span style={{ paddingLeft: "16rem", opacity: "0" }}>
                        .l
                      </span>
                    </th>
                    <th>
                      PHONE NUMBER{" "}
                      <img
                        onClick={() => setdisplayfilter(!displayfilter)}
                        src={dropdown}
                        alt=""
                        style={{ marginLeft: "12px" }}
                      />
                      <span style={{ paddingLeft: "9rem", opacity: "0" }}>
                        .
                      </span>
                    </th>
                    <th>
                      DATE JOINED{" "}
                      <img
                        onClick={() => setdisplayfilter(!displayfilter)}
                        src={dropdown}
                        alt=""
                        style={{ marginLeft: "12px" }}
                      />
                      <span style={{ paddingLeft: "7rem", opacity: "0" }}>
                        .
                      </span>
                    </th>
                    <th>
                      STATUS{" "}
                      <img
                        onClick={() => setdisplayfilter(!displayfilter)}
                        src={dropdown}
                        alt=""
                        style={{ marginLeft: "12px" }}
                      />
                      <span style={{ paddingLeft: "5rem", opacity: "0" }}>
                        lol
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* mapped out data stored in the userdata state from the api */}
                  {usersdata?.slice(0, 14).map((data: any) => {
                    return (
                      <tr key={data.id}>
                        <td>{data.orgName}</td>
                        <td>{data.userName}</td>
                        <td>{data.email}</td>
                        <td>{data.phoneNumber?.substring(0, 13)}</td>
                        <td>{data.createdAt?.substring(0, 10)}</td>
                        <span className="inactive">Inactive</span>
                        <BiDotsVerticalRounded
                          key={data.id}
                          onClick={() => active(data.id)}
                          style={{
                            marginTop: ".6rem",
                            marginLeft: "1rem",
                            cursor: "pointer",
                            width: 'fit-content',
                          }}
                          ></BiDotsVerticalRounded>
                          {displaydetails === data.id && (
                            <Details details={data.id} />
                          )}
                        {/* <hr style={{position: 'relative', left: 10, width: '100rem', marginTop: '1rem'}}/> */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <section className="downmove">
              <div>
                <h4>Showing</h4>
                <span>
                  <p>14</p>
                  <img src={dropdown2} alt="" />
                </span>
                <p>Out of 100</p>
              </div>
              <div className="second-child">
                <img src={previous} alt="" />
                <div>
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>...</li>
                    <li>15</li>
                    <li>16</li>
                  </ul>
                </div>
                <img src={next} alt="" />
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}
