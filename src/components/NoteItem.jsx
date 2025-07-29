import React from "react";
import NoteCard from "./NoteCard";

export default function NoteItem({ notes, setNotes, board }) {
  const renderNotes = (status) => {
    if (board !== "All") {
      notes = notes.filter((note) => note.boardId === board);
    }

    return notes
      .filter((note) => note.status === status)
      .map((note) => {
        return (
          <NoteCard key={note.id} note={note} onDelete={handleDeleteNote} />
        );
      });
  };
  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div className="row ">
      <div className="col-4">
        <h2>done</h2>
        <hr />
        {renderNotes("done")}
      </div>
      <div className="col-4">
        <h2>on doing</h2>
        <hr />
        {renderNotes("on doing")}
      </div>
      <div className="col-4">
        <h2>to do</h2>
        <hr />
        {renderNotes("to do")}
      </div>
    </div>
  );
}
