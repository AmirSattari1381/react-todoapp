import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Naw = (props) => { // props در اینجا همه مقادیری هست ک توی browserRouter هستش
  console.log(props);
  return (
    <div className="m-3">
      <ul className="nav nav-pills justify-content-center">
        <li className="nav-item">
          <NavLink
            to="/"
            // className={   برای Link باید این کار را بکنیم
            //   props.location.pathname === "/" ? "nav-link active" : "nav-link"
            // }
            className="nav-link"
            exact
            activeClassName="active"
            activeStyle={{ backgroundColor: "green", color: "aqua" }}
          >
            کار های روز مره
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            // className={
            //   props.location.pathname === "/about" ? "nav-link active" : "nav-link"
            // }
            className="nav-link"
            activeStyle={{ color: "aqua" }}
          >
            درباره سازنده
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Naw);
