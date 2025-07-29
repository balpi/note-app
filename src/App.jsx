import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import NoteForm from "./components/NoteForm.jsx";
import { useContext, useEffect, useState } from "react";
import MainPage from "./components/MainPage.jsx";
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
        <MainPage
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
