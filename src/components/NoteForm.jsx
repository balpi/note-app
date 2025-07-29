import React, { useState } from "react";

export default function NoteForm({ onAddNote, boardId }) {
  const [status, setStatus] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !status.trim() || !content.trim()) return;
    console.log("Adding Note to board : ", boardId);

    onAddNote({
      boardId: boardId,
      title: title.trim(),
      content: content.trim(),
      status: status,
    });
    setTitle("");
    setContent("");
    setStatus("");
  };
  return (
    <form id="formNoteAdd" onSubmit={handleSubmit}>
      <div
        className="modal fade"
        id="formModal"
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
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="done"
                    checked={status === "done"}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    done
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="on doing"
                    checked={status === "on doing"}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    on doing
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    value="to do"
                    checked={status === "to do"}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio3">
                    to do
                  </label>
                </div>

                <div className="row">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      id="noteTitle"
                      placeholder="Note Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="col-12 mt-2">
                    <textarea
                      className="form-control"
                      id="noteContent"
                      rows="3"
                      placeholder="Note Content"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
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
