import React from "react";
import PropTypes from "prop-types";

export default function BoardItem({ board, selectedBoard, boardSelection }) {
  return (
    <li
      key={board.id + "li"}
      className={
        selectedBoard === board.id
          ? "btn list-group-item active"
          : "btn list-group-item"
      }
      board-id={board.id}
      onClick={boardSelection}
    >
      <h2
        key={board.id + "span"}
        className={
          selectedBoard === board.id
            ? "badge bg-primary float-start"
            : "badge bg-secondary float-start"
        }
      >
        {board.name}
      </h2>
    </li>
  );
}
