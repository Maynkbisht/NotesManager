import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setError("");

    if (!title.trim()) {
      setError("Please enter a note title");
      return;
    }

    if (!desc.trim()) {
      setError("Please enter a note description");
      return;
    }

    if (title.trim().length < 3) {
      setError("Title must be at least 3 characters long");
      return;
    }

    if (desc.trim().length < 5) {
      setError("Description must be at least 5 characters long");
      return;
    }

    addTodo(title, desc);
    setTitle("");
    setDesc("");
    setError("");
  };

  return (
    <div className="container my-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">TextArea</h2>

          {error && (
            <div
              className="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              {error}
            </div>
          )}

          <form onSubmit={submit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Note Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
                id="title"
                placeholder="Enter note title..."
              />
            </div>

            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Note Description
              </label>
              <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="form-control"
                id="desc"
                placeholder="Enter note description..."
                rows="4"
              />
            </div>

            <button type="submit" className="btn btn-success">
              Add Note
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
