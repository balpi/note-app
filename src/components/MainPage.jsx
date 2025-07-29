import React from "react";
import BoardItem from "./BoardItem";
import NoteItem from "./NoteItem";

export default function MainPage({
  notes,
  board,
  setNotes,
  selectedBoard,
  setSelectedBoard,
  theme,
  toggleTheme,
}) {
  const boardSelectionHandler = (e) => {
    setSelectedBoard(e.currentTarget.getAttribute("board-id"));
  };
  return (
    <>
      <div className="row mb-3">
        <div className="col-3">
          <h1>NoteApp</h1>
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={toggleTheme}
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
        <div className="col-9  d-flex justify-content-end">
          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#formModal"
          >
            Add Note
          </button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-3">
          <ul className="list-group border-danger ">
            <li
              className={
                selectedBoard === "All"
                  ? "btn list-group-item active"
                  : "btn list-group-item"
              }
              onClick={() => setSelectedBoard("All")}
            >
              <h2>All Boards</h2>
            </li>
            {board.map((b) => (
              <BoardItem
                key={b.id}
                board={b}
                boardSelection={boardSelectionHandler}
              />
            ))}
            <li
              className="list-group-item btn btn-secondary"
              data-bs-toggle="modal"
              data-bs-target="#formBoardModal"
            >
              <h2>Add Board</h2>
            </li>
          </ul>
        </div>
        <div className="col-9">
          {console.log("Selected Board:", selectedBoard)}
          <NoteItem notes={notes} setNotes={setNotes} board={selectedBoard} />
        </div>
      </div>
    </>
  );
}
