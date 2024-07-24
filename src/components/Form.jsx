import { useState } from "react";
import React from "react";
import Zoom from "@mui/material/Zoom";

function Form(props) {
  const [formClicked,setFormClick]=useState(false)
  const [formData, setForm] = useState({
    name: "",
    father: "",
    email: "",
    phone: "",
    dob: "",
    course: "",
  });

  function formInit(){
    setFormClick(true)
  }

  function change(event) {
    const { name, value } = event.target;
    setForm((prev) => {
      return {
        name: prev.name,
        father: prev.father,
        email: prev.email,
        phone: prev.phone,
        dob: prev.dob,
        course: prev.course,
        [name]: value,
      };
    });
  }

  function click(event) {
    if (
      formData.name !== "" &&
      formData.father !== "" &&
      formData.email !== "" &&
      formData.phone !== "" &&
      formData.dob !== ""
    ) {
      formData.course = document.querySelector("#course").value;
      // console.log(formData);
      props.add(formData);
      setForm({
        name: "",
        father: "",
        email: "",
        phone: "",
        dob: "",
        course: "",
      });
    }
    event.preventDefault();
  }

  return (
    <div className="form-container">
      <form method="post" className="student-form">
      <h1 style={{ margin: "auto" }}>Form</h1>
        <div className="name">
          <label htmlFor="name">First Name</label>
          <input
          onClick={formInit}
            onChange={change}
            value={formData.name}
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
        <div className="father">
          <label htmlFor="father">Last Name</label>
          <input
            onChange={change}
            value={formData.father}
            type="text"
            name="father"
            id="father"
            required
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email ID</label>
          <input
            onChange={change}
            value={formData.email}
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="phone">
          <label htmlFor="phone">Phone Number</label>
          <input
            onChange={change}
            value={formData.phone}
            type="number"
            name="phone"
            id="phone"
            required
          />
        </div>
        <div className="dob">
          <label htmlFor="dob">Date Of Birth</label>
          <input
            onChange={change}
            value={formData.dob}
            type="date"
            name="dob"
            id="dob"
            required
          />
        </div>
        <div className="course">
          <label htmlFor="course">Choose a course:</label>
          <select id="course" name="course">
            <option value="Web Development">Web Development</option>
            <option value="python">Python</option>
          </select>
        </div>
        <Zoom in={formClicked}>
          <button onClick={click} type="submit">
            Submit
          </button>
        </Zoom>
      </form>
    </div>
  );
}

export default Form;
