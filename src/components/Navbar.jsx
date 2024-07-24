import React, { useState } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Close } from "@mui/icons-material";

function Navbar(props) {
  const [aniClick, setAni] = useState(false);

  function ani(event) {
    // console.log("Clicked");
    setAni((prev) => {
      return !prev;
    });
  }

  function click(event) {
    props.view(event.target.innerText);
  }

  function sideClicker(event) {
    props.view(event.target.innerText);
    setAni((prev) => {
      return !prev;
    });
  }

  return (
    <div>
      <nav className="navbar">
        <div className="hero">Students Entry By Saala</div>
        <div className="toggler" onClick={ani}>
          {aniClick ? <Close /> : <ReorderIcon />}
        </div>
        <ul className="nav-links">
          <li className="link" onClick={click}>
            Form
          </li>
          <li className="link" onClick={click}>
            Students List
          </li>
        </ul>
      </nav>
      <div
        className="side-bar"
        style={aniClick ? { left: "0px" } : { left: "-200%" }}
      >
        <ul className="side-links">
          <li className="link" onClick={sideClicker}>
            Form
          </li>
          <li className="link" onClick={sideClicker}>
            Students List
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
