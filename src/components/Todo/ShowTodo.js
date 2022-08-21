import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import useTodos from "../../hook/useTodos"; 

const ShowTodo = ({ todo, blog, setBlog}) => {
  const [todos , setTodos] = useTodos();
  const { title, desc, _id } = todo;  
 
  const handleDelete = (id) => {
     const proceed = window.confirm("Are you sure you want to delete");
     if (proceed) {
       const url = `http://localhost:9000/api/blogs/${id}`;
       fetch(url, {
         method: "DELETE",
       })
         .then((res) => res.json())
         .then((data) => {
           if (data.deletedCount > 0) {
             const remaining = todos.filter((todo) => todo._id !== id);
             setTodos(remaining);
             toast("blog Deleted. Please refresh this page");
           }
         });
     }
   };
  
  return (
    <div>
      <div className="card  bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{desc}</p>
          <div className="card-actions justify-start">
            <label onClick={() => setBlog(todo)} htmlFor="update-modal" class="btn modal-button">Edit</label>
            <button onClick={()=>handleDelete(_id)} className="btn btn-error mr-5">Delete</button>  
          </div> 
        </div>
      </div>   
    </div>
  );
};

export default ShowTodo;
