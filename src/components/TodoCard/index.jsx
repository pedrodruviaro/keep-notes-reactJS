import React from "react";
import {
  DeleteTodoButton,
  TodoItem,
  TodoList,
  TodoTitle,
  TodoWrap,
} from "./styles";
import { FaCheckDouble, FaTrash } from "react-icons/fa";


export default function Index(props) {
    
  return (
    <TodoWrap>
      <TodoTitle>{props.todo.title || "Generic title"}</TodoTitle>

      <TodoList>
        {props.todo.todo.map((task) => (
          <TodoItem key={task}>
            <p>{task}</p>

            <button
              onClick={(e) => {
                const text = e.target.previousSibling;
                text.classList.toggle("done");
              }}
            >
              <FaCheckDouble />
            </button>
          </TodoItem>
        ))}
      </TodoList>

      <DeleteTodoButton onClick={props.deleteTodo}>
        <FaTrash />
      </DeleteTodoButton>


    </TodoWrap>
  );
}
