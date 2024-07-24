import React, { useState } from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import StudentsList from "./StudentsList";
import Editing from "./Editing";

function App() {
  const stulist = JSON.parse(localStorage.getItem("stuLis"));
  const actlist = stulist ? stulist : [];

  const [isViewing, setViewing] = useState(false);
  const [list, setList] = useState(actlist);
  const [isEditing, setEditing] = useState(false);
  const [editingID, setEditID] = useState(undefined);

  // Viewing Student

  function viewing(value) {
    if (value == "Form") {
      setViewing(false);
    } else {
      setViewing(true);
    }
  }

  function addStudent(obj) {
    const list = localStorage.getItem("stuLis");
    const curList = list ? JSON.parse(list) : [];
    curList.push(obj);
    localStorage.setItem("stuLis", JSON.stringify(curList));
    setList(curList);
  }

  function clearFull() {
    if (
      confirm("Do You Really Want To Delete All The Data From Student List?")
    ) {
      localStorage.clear();
      setList([]);
    }
  }

  function delStu(id) {
    const nowLis = list;
    // console.log(id);
    // console.log(list);
    if (
      window.confirm(
        `Do You Really Want To Delete The Student With The Name: ${list[id].name}?`
      )
    ) {
      const newLis = nowLis.filter((ele, ind) => {
        return ind !== id;
      });
      // console.log(newLis);
      setList(newLis);
      localStorage.setItem("stuLis", JSON.stringify(newLis));
    }
  }

  function editStu(id) {
    setViewing(false);
    setEditing(true);
    setEditID(id);
  }

  function editClick(list) {
    setEditing(false);
    setEditID(undefined);
    setViewing(true);
    setList(list);
  }

  return (
    <div>
      <Navbar view={viewing} />
      {isEditing ? (
        <Editing click={editClick} id={editingID} />
      ) : isViewing ? (
        <div>
          <h1 style={{ margin:"20px auto",textAlign:"center" }}>Students List</h1>
          <div className="box-student">
            <StudentsList list={list} del={delStu} edit={editStu} />
            <button onClick={clearFull}>&times;</button>
          </div>
        </div>
      ) : (
        <Form add={addStudent} />
      )}
    </div>
  );
}

export default App;
