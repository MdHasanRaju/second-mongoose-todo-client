import { useState } from "react";
import { NavLink } from "react-router-dom";
import useTodos from "../../hook/useTodos";
import ShowTodo from "./ShowTodo";
import UpdateTodo from './UpdateTodo';

const Todo = () => {
  const [todos, setTodos] = useTodos();
  const [blog, setBlog] = useState({});

  return (
    <div>
      <h2 className="text-center text-2xl text-white-600 font-bold">Blogs</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-4 mt-6 ">
        {todos?.map((todo) => (
          <ShowTodo todo={todo} blog={blog} setBlog={setBlog} key={todo._id}></ShowTodo>
        ))}
      </div>
      <div className="text-center mt-10">
        <NavLink to="/addtodo">
          <button className="btn">Add New blog</button>
        </NavLink>
      </div>
      { blog && 
      <UpdateTodo blog={blog} setBlog={setBlog} ></UpdateTodo>
      }
    </div>
  );
};

export default Todo;
