export default function NoteItem({ notes, setNotes, board }) {
  const renderNotes = (status, newClass) => {
    if (board !== "All") {
      notes = notes.filter((note) => note.boardId === board);
    }

    return notes
      .filter((note) => note.status === status)

      .map((note) => (
        <div key={note.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.content}</p>
            <p className="card-text">
              <small className="text-muted">{note.createdAt}</small>
            </p>
            <span className={`badge ${newClass}`}>{note.status}</span>
            <button
              className="btn btn-danger btn-sm float-end"
              onClick={() =>
                setNotes((prev) => prev.filter((n) => n.id !== note.id))
              }
            >
              Remove
            </button>
          </div>
        </div>
      ));
  };

  return (
    <div className="row ">
      <div className="col-4">
        <h2>done</h2>
        <hr />
        {renderNotes("done", "bg-success")}
      </div>
      <div className="col-4">
        <h2>on doing</h2>
        <hr />
        {renderNotes("on doing", "bg-warning")}
      </div>
      <div className="col-4">
        <h2>to do</h2>
        <hr />
        {renderNotes("to do", "bg-danger")}
      </div>
    </div>
  );
}
