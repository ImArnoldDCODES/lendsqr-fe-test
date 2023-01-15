import React from "react";
import "./View.scss";
import { useEffect, useState } from "react";
import axios from "axios";
//component
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import { useNavigate, useParams } from "react-router-dom";
import userProps from "../components/Interface";

//icons
import back from "../icons/star.svg";
import star from "../icons/star.svg";
import star2 from "../icons/star2.svg";
import star3 from "../icons/star3.svg";

export default function View() {

  const [data, setData] = useState<userProps>();
  const { id } = useParams();

  let navigate = useNavigate();
  function handleClick() {
    navigate("/dashboard");
  }


  useEffect(() => {
    axios
      .get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
      )
      .then(function (response) {
        // handle success
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [id]);

  return (
    <div className="dashboard">
      <Navbar />
      <div className="split">
        <SideNav />
        <div className="dash">
          <section className="dat">
            <div className="dat1">
              <span onClick={handleClick}
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  gap: "10px",
                }}
              >
                <img src={back} alt="" />
                <h3>Back to Users</h3>
              </span>
            </div>
            <div className="dat2">
              <h4>User Details</h4>
              <div className="buttons">
                <button className="button1">Blacklist User</button>
                <button className="button2">Activate User</button>
              </div>
            </div>
          </section>
          <section className="overview-nav">
            <div className="overview">
              <img
                src={data?.profile?.avatar}
                alt=""
                style={{ borderRadius: "100px" }}
              />
              <div>
                <h5>{data?.userName}</h5>
                <p>{data?.accountNumber}</p>
              </div>
              <div className="middle">
                <h6>User’s Tier</h6>
                <div>
                  <img src={star} alt="" />
                  <img src={star2} alt="" />
                  <img src={star3} alt="" />
                </div>
              </div>
              <div className="last">
                <h5>
                  {data?.profile?.currency} {data?.accountBalance}
                </h5>
                <p>9912345678/Providus Bank</p>
              </div>
            </div>
            <div className="nav">
              <ul>
                <li className="border-effect">
                  General Details <span></span>
                </li>
                <li>Documents</li>
                <li>Bank Details</li>
                <li>Loans</li>
                <li>Savings</li>
                <li>App and System</li>
              </ul>
            </div>
          </section>
          <section className="info-display">
            <div>
              <h4>Personal Information</h4>
              <div className="infos1">
                <span>
                  <h6>full Name</h6>
                  <p>
                    {data?.profile?.firstName} {data?.profile?.lastName}{" "}
                  </p>
                </span>
                <span>
                  <h6>phone Number</h6>
                  <p>{data?.profile?.phoneNumber?.split('x')[0]} </p>
                </span>
                <span>
                  <h6>Email Address</h6>
                  <p>{data?.email}</p>
                </span>
                <span>
                  <h6>Bvn</h6>
                  <p>{data?.profile?.bvn}</p>
                </span>
                <span>
                  <h6>Gender</h6>
                  <p>{data?.profile?.gender}</p>
                </span>
                <span>
                  <h6>Marital status</h6>
                  <p>Single</p>
                </span>
                <span>
                  <h6>Children</h6>
                  <p>None</p>
                </span>
                <span>
                  <h6>Type of residence</h6>
                  <p>Parent’s Apartment</p>
                </span>
              </div>
              <hr
                style={{
                  margin: "0px 2rem",
                  opacity: "0.1",
                  border: "1px solid #213F7D",
                }}
              />
            </div>
            <div>
              <h4>Education and Employment</h4>
              <div className="infos">
                <span>
                  <h6>level of education</h6>
                  <p>{data?.education?.level}</p>
                </span>
                <span>
                  <h6>employment status</h6>
                  <p>{data?.education?.employmentStatus} </p>
                </span>
                <span>
                  <h6>sector of employment</h6>
                  <p>{data?.education?.sector} </p>
                </span>
                <span>
                  <h6>Duration of employment</h6>
                  <p>{data?.education?.duration}</p>
                </span>
                <span>
                  <h6>office email</h6>
                  <p>{data?.education?.officeEmail}</p>
                </span>
                <span>
                  <h6>Monthly income</h6>
                  <p>{data?.education?.monthlyIncome[0]} - {data?.education?.monthlyIncome[1]}</p>
                </span>
                <span>
                  <h6>loan repayment</h6>
                  <p>{data?.education?.loanRepayment}</p>
                </span>
              </div>
              <hr
                style={{
                  margin: "0px 2rem",
                  opacity: "0.1",
                  border: "1px solid #213F7D",
                }}
              />
            </div>
            <div>
              <h4>Socials</h4>
              <div className="infos">
                <span>
                  <h6>Twitter</h6>
                  <p>{data?.socials?.twitter}</p>
                </span>
                <span>
                  <h6>Facebook</h6>
                  <p>{data?.socials?.facebook} </p>
                </span>
                <span>
                  <h6>Instagram</h6>
                  <p>{data?.socials?.instagram} </p>
                </span>
              </div>
              <hr
                style={{
                  margin: "0px 2rem",
                  opacity: "0.1",
                  border: "1px solid #213F7D",
                }}
              />
            </div>
            <div>
              <h4>Guarantor</h4>
              <div className="infos">
                <span>
                  <h6>full Name</h6>
                  <p>
                    {data?.profile?.firstName} {data?.profile?.lastName}{" "}
                  </p>
                </span>
                <span>
                  <h6>phone Number</h6>
                  <p>{data?.profile?.phoneNumber} </p>
                </span>
                <span>
                  <h6>Email Address</h6>
                  <p>{data?.email}</p>
                </span>
                <span>
                  <h6>Relationship</h6>
                  <p>Sister</p>
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
