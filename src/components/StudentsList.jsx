import React, { useState } from "react";
import Zoom from "@mui/material/Zoom";

function StudentsList(props) {
  if (props.list.length === 0) {
    return <div className="empty">List Empty!</div>;
  }

  return props.list.map((ele, ind) => {
    return (
      <Final
        del={props.del}
        key={ind}
        id={ind}
        name={ele.name}
        father={ele.father}
        email={ele.email}
        phone={ele.phone}
        course={ele.course}
        dob={ele.dob}
        edit={props.edit}
      />
    );
  });
}

function Final(props) {
  const [boxViewed, setBoxView] = useState(false);

  function clickView() {
    setBoxView((prev) => {
      return !prev;
    });
  }

  function del() {
    props.del(props.id);
  }

  function edit() {
    props.edit(props.id);
  }

  return (
    <div className="box">
      <h5 onClick={clickView} className="box-name">
        <b>First Name: </b>
        {props.name}
      </h5>
      {boxViewed ? (
        <Zoom in={boxViewed}>
          <div>
            <p className="box-father">
              <b>Last Name: </b>
              {props.father}
            </p>
            <p className="box-father">
              <b>ID: </b>
              {props.id + 1}
            </p>
            <p className="box-dob">
              <b>Date Of Birth: </b>
              {props.dob}
            </p>
            <p className="box-contact">
              <b>Email: </b>
              {props.email}
            </p>
            <p className="box-contact">
              <b>Phone: </b>
              {props.phone}
            </p>
            <h5 className="box-course">
              <b>Course Chosen: </b>
              {props.course}
            </h5>
            <div className="btns">
              <button className="del" onClick={del}>
                &times;
              </button>
              <button className="edit" onClick={edit}>
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
            </div>
          </div>
        </Zoom>
      ) : null}
    </div>
  );
}

export default StudentsList;
