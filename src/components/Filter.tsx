import React from "react";
import Select from "react-select";
import "./styles.scss";

const FIlter = () => {
  const organisation = [
    { value: "Lendsqr", label: "Lendsqr" },
    { value: "Irorun", label: "Irorun" },
  ];
  const status = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
    { value: "Blacklisted", label: "Blacklisted" },
    { value: "Pending", label: "Pending" },
  ];

  return (
    <div id="filter" className="filter">
      <section>
        <form>
          <label htmlFor="">Organization</label>
          <Select options={organisation} />
          <label htmlFor="">Username</label>
          <input type="name" placeholder="User" />
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Email" />
          <label htmlFor="">Date</label>
          <input type="date" />
          <label htmlFor="">Phone number</label>
          <input type="text" placeholder="Phone Number" />
          <label htmlFor="">Status</label>
          <Select options={status} />
          <div className="btns">
            <button className="btn1">Reset</button>
            <button className="btn2">Filter</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default FIlter;
