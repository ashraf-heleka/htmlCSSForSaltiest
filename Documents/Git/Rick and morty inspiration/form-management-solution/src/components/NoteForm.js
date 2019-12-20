import React, { useState } from "react";

const NoteForm = props => {
  console.log("props", props);
  const [note, setNote] = useState({
    title: "",
    body: ""
  });

  const handleChanges = e => {
    console.log(note);
    // console.log("the name", e.target.name)
    // console.log("the event target", e.target)
    //we are dynamically setting our keys.
    // setNote({ ...note, title: e.target.value });
    // setNote({ ...note, note: e.target.value });
    //  const nameObj={...note}
    //  nameObj[e.target.name]= e.target.value
    // setNote(nameObj)
    setNote({
      ...note,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewNote(note);
    setNote({ title: "", body: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        name="title"
        onChange={handleChanges}
        value={note.title}
      />
      <label htmlFor="note">Note</label>
      <textarea
        id="note"
        name="body"
        onChange={handleChanges}
        value={note.body}
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
