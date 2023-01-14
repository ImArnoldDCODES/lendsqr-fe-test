import "./styles.scss";
//component
import sidedata from "./Sideitems";
//icon
import signout from "../icons/sign-out.svg";
import { useNavigate } from "react-router-dom";

export default function SideNav() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/dashboard");
  }

  return (
    <div className="sideNav">
      <section>
        {sidedata?.firstsection.map((data, index) => (
          <div key={index} style={{ paddingTop: "20px" }} className="data">
            <img src={data.icon} style={{ marginRight: "12px" }} alt="" />
            <span>
              {data.title}{" "}
              <img src={data.icon2} alt="" style={{ marginLeft: "5px" }} />
            </span>
          </div>
        ))}

        <div style={{ marginTop: "2rem" }}>
          <h4 className="header">CUSTOMERS</h4>
          {sidedata?.customer.map((data, index) => (
            <div key={index}>
              <div className="data">
                <img src={data.icon} alt="" />
                <span>{data.title}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "2rem" }}>
          <h4 className="header">BUSINESSES</h4>
          {sidedata?.businesses.map((data, index) => (
            <div key={index} className="data">
              <img src={data.icon} alt="" />
              <span>{data.title}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "2rem" }}>
          <h4 className="header">SETTINGS</h4>
          {sidedata?.settings.map((data, index) => (
            <div key={index} className="data">
              <img src={data.icon} alt="" />
              <span>{data.title}</span>
            </div>
          ))}
        </div>

        <div className="logout">
          <span onClick={handleClick}>
            <img src={signout} alt="" />
            Logout
          </span>
          <p>v1.2.0</p>
        </div>
      </section>
    </div>
  );
}
