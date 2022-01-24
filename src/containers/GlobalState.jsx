import React, { useState } from "react";
import { toast } from "react-toastify";
import TodoContext from "../context/todoContext";

const GlobalState = (props) => {
    const [getTodos, setTodos] = useState([]);
    const [getTodo, setTodo] = useState("");

    const handleCreateNewTodo = () => {
        const todos = [...getTodos];
        const todo = {
            id: Date.now(),
            text: getTodo,
            completed: false,
        };
        if (getTodo !== "" && getTodo !== " ") {
            todos.push(todo);
            toast.success("کار با موفقیت ثبت شد");
            setTodos(todos);
            setTodo("");
        }
    };

    const handleCompletedTodo = (id) => {
        const todos = [...getTodos];
        const todoIndex = todos.findIndex((t) => t.id === id);
        const todo = todos[todoIndex];
        todo.completed = !todo.completed;
        todos[todoIndex] = todo;
        setTodos(todos);
        if (todo.completed === true) {
            toast.info("ایول !! کار رو با موفقیت انجام دادی");
        } else {
            toast.warning("هنوز انجام ندادی ؟");
        }
    };

    const handleDeleteTodo = (id) => {
        const todos = [...getTodos];
        const filteredTodos = todos.filter((t) => t.id !== id);
        setTodos(filteredTodos);
        if (filteredTodos) {
            toast.error("کار به اتمام رسید");
        }
    };

    const handleTodoInput = (event) => {
        setTodo(event.target.value);
    };

    return (
        <TodoContext.Provider
            value={{
                todos: getTodos,
                todo: getTodo,
                handleCreateNewTodo: handleCreateNewTodo,
                handleTodoInput: handleTodoInput,
                handleCompletedTodo: handleCompletedTodo,
                handleDeleteTodo: handleDeleteTodo,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
};

export default GlobalState;
