import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateTodo = ({setBlog, blog }) => {
  const { register, handleSubmit } = useForm();  
  console.log(blog);

  const handleUpdateForm = (data, e) => { 
    const url = `http://localhost:9000/api/blogs/${blog?._id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        e.target.reset();
        console.log(result);
        setBlog(result);
        toast("Blog Updated Successfully");
      setBlog(null)
      });
  };

  return (
    <div> 
      <input type="checkbox" id="update-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box relative">
          <label
            htmlFor="update-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-primary">Title: {blog?.title}</h3>
          <p class="py-4 text-black">Description: {blog?.desc}</p>
          <form onSubmit={handleSubmit(handleUpdateForm)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-black">Title</span>
              </label>
              <input
                type="text" 
                defaultValue={blog?.title || ''}
                {...register("title", { required: true })}
                className="input input-bordered w-full max-w-xs text-black"
              />
            </div>
            <div className="form-control  w-full max-w-xs">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text" 
                defaultValue={blog?.desc || ''}
                {...register("desc", { required: true })}
                className="input input-bordered w-full max-w-xs text-black"
              />
            </div>
            <div className="flex justify-start modal-action">
              <button type="submit" className="text-white btn btn-wide mt-3">
                {/* <label htmlFor="update-modal" class="btn btn-wide mt-3">
                 Update
                </label> */}
                Submit
              </button>
              {/* <label type="submit" htmlFor="update-modal" class="btn btn-wide mt-3">
              update
            </label> */}
            </div>
          </form>

          {/* <div class="modal-action">
            <label htmlFor="update-modal" class="btn">
              Yay!
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default UpdateTodo;
