import React from "react";

import PropTypes from "prop-types";

export default function NoteCard({ note, onDelete }) {
  const getBadgeClass = (status) => {
    switch (status) {
      case "done":
        return "bg-success";
      case "on doing":
        return "bg-warning";
      case "to do":
        return "bg-danger";
      default:
        return "";
    }
  };
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.content}</p>
        <p className="card-text">
          <small className="text-muted">{note.createdAt}</small>
        </p>
        <span className={`badge ${getBadgeClass(note.status)}`}>
          {note.status}
        </span>
        {onDelete && (
          <button
            className="btn btn-sm btn-outline-danger float-end"
            onClick={() => onDelete(note.id)}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

NoteCard.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    status: PropTypes.string,
    boardId: PropTypes.string,
  }).isRequired,
  onDelete: PropTypes.func,
};
