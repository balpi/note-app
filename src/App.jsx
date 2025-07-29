import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import NoteForm from "./components/NoteForm.jsx";
import { useContext, useEffect, useState } from "react";
import NoteItem from "./components/NoteItem.jsx";
import AddBoardForm from "./components/AddBoardForm.jsx";

import { ThemeContext } from "./components/theme.jsx";

export default function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [board, setBoard] = useState(() => {
    const savedBoard = localStorage.getItem("board");
    return savedBoard ? JSON.parse(savedBoard) : [];
  });

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [selectedBoard, setSelectedBoard] = useState("All");
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("board", JSON.stringify(board));
  }, [board]);

  const handleAddBoard = ({ board }) => {
    const newBoard = {
      id: Date.now(),
      name: board,
    };
    setBoard((prev) => [...prev, newBoard]);
    localStorage.setItem("board", JSON.stringify([board]));
  };

  const handleAddNote = ({ title, content, status, boardId }) => {
    const newNote = {
      id: Date.now(),
      boardId,
      title,
      content,
      status,
      createdAt: new Date().toLocaleString(),
    };
    setNotes((prev) => [newNote, ...prev]);
  };

  return (
    <>
      <div className="container">
        <Main
          notes={notes}
          setNotes={setNotes}
          board={board}
          selectedBoard={selectedBoard}
          setSelectedBoard={setSelectedBoard}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      </div>

      <NoteForm onAddNote={handleAddNote} boardId={selectedBoard} />
      <AddBoardForm onAddBoard={handleAddBoard} />
    </>
  );
}

function Main({
  notes,
  board,
  setNotes,
  selectedBoard,
  setSelectedBoard,
  theme,
  toggleTheme,
}) {
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
              <li
                key={b.id + "li"}
                className={
                  selectedBoard === b.id
                    ? "btn list-group-item active"
                    : "btn list-group-item"
                }
                board-id={b.id}
                onClick={() => setSelectedBoard(b.id)}
              >
                <h2
                  key={b.id + "span"}
                  className={
                    selectedBoard === b.id
                      ? "badge bg-primary float-start"
                      : "badge bg-secondary float-start"
                  }
                >
                  {b.name}
                </h2>
              </li>
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
