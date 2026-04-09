import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className="container my-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Your Notes</h2>
          {props.todos.length === 0 ? (
            <p className="text-center text-muted">
              No notes yet. Create one to get started!
            </p>
          ) : (
            <div>
              {props.todos.map((todo) => {
                console.log(todo.sno);
                return (
                  <TodoItem
                    todo={todo}
                    key={todo.sno}
                    onDelete={props.onDelete}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
