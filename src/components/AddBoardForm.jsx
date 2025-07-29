import React, { useState } from "react";

export default function AddBoardForm({ onAddBoard }) {
  const [board, setboard] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (board) {
      onAddBoard({ board });
    }
    setboard("");
  };

  return (
    <form id="formBoardAdd" onSubmit={handleSubmit}>
      <div
        className="modal fade"
        id="formBoardModal"
        tabIndex="-1"
        aria-labelledby="formModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="formModalLabel">
                Add New Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      id="boardName"
                      placeholder="Board Name"
                      value={board}
                      onChange={(e) => setboard(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                id="btnSave"
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
