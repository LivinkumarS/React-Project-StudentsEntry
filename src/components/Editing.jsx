import React, { useState } from "react";

function Editing(props) {
  const list = JSON.parse(localStorage.getItem("stuLis"));
  const obj = list[props.id];

  const [editData, editForm] = useState({
    name: obj.name,
    father: obj.father,
    email: obj.email,
    phone: obj.phone,
    dob: obj.dob,
    course: obj.course,
  });

  function change(event) {
    const { name, value } = event.target;
    editForm((prev) => {
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
      editData.name !== "" &&
      editData.father !== "" &&
      editData.email !== "" &&
      editData.phone !== "" &&
      editData.dob !== ""
    ) {
      editData.course = document.querySelector("#course").value;
      // console.log(editData);
      list[0] = editData;
      localStorage.setItem("stuLis", JSON.stringify(list));
      //   editForm({
      //     name: "",
      //     father: "",
      //     email: "",
      //     phone: "",
      //     dob: "",
      //     course: "",
      //   });

      props.click(list);
    }
    event.preventDefault();
  }

  return (
    <div className="form-container container-fluid d-flex">
      <form method="post" className="student-form">
        <h1 style={{ margin: "auto" }}>EDIT</h1>
        <div className="name">
          <label htmlFor="name">First Name</label>
          <input
            onChange={change}
            value={editData.name}
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
            value={editData.father}
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
            value={editData.email}
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
            value={editData.phone}
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
            value={editData.dob}
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

        <button onClick={click} type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Editing;
