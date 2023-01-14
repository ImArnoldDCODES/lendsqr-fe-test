import "./SignIn.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//icons
import Logo from "../images/logo.svg";
import Svg from "../images/loginvector.svg";

export default function SignUp() {
  const [values, setValues] = useState({
    password: "",
  });
  const [show, setShow] = useState(false);

    // this is a function that navigates to /dashboard using useNavigate as declared
  let navigate = useNavigate();
  function handleClick() {
    navigate(`/dashboard`);
  }

  // show state updater to show and hide password input
  const changeView = (e: any) => {
    e.preventDefault();
    setShow(!show);
  };

  // get input from the password field
  const handlePasswordChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className="content">
      <section className="logo">
        <img src={Logo} alt="logo" />
      </section>
      <div className="contain">
        <section className="svg">
          <img src={Svg} alt="loginsvg" width={600} height={407} />
        </section>
        <section className="SignIn">
          <div className="welcome">
            <h3>Welcome!</h3>
            <h5>Enter details to login</h5>
          </div>
          <div className="inputs">
            <form>
              <span>
                <input type="email" placeholder="Email" />
              </span>
              <span>
                <input
                  type={show === true ? "text" : "password"}
                  value={values.password}
                  onChange={handlePasswordChange("password")}
                  autoComplete="off"
                  placeholder="Password"
                />
                <h6 onClick={changeView}>{show === true ? "Hide" : "Show"}</h6>
              </span>
              <p> FORGET PASSWORD?</p>
              <div onClick={handleClick}>
                <button>LOG IN</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
