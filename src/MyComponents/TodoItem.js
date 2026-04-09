import React from "react";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="card mb-3 border-0 shadow-sm">
      <div className="card-body">
        <h5 className="card-title mb-2">{todo.title}</h5>
        <p className="card-text text-muted mb-3">{todo.desc}</p>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
