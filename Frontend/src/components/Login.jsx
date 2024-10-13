import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
          
          <h3 className="font-bold text-xl mb-3 ">Login</h3>

          {/* Email */}
          <span className="mt-2 block">Email</span>
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-md outline-none border px-2 py-1 "
            {...register("email", { required: true })}
          />
          <br />
          {errors.email && (
            <span className=" text-sm text-red-500 ">
              This field is required
            </span>
          )}

          {/* Password */}
          <span className="mt-2 block">Password</span>
          <input
            type="text"
            placeholder="Enter your Password"
            className="rounded-md outline-none border px-2 py-1 "
            {...register("password", { required: true })}
          />
          <br />
          {errors.password && (
            <span className=" text-sm text-red-500 ">
              This field is required
            </span>
          )}

          <div className="mt-3 flex justify-around">
            <button className="px-3 py-1 bg-pink-500 text-white rounded-md hover:bg-pink-700">
              Login
            </button>
            <p>
              Don't Have an Account?{" "}
              <Link to={"/signup"} className="text-blue-500 underline">
                {" "}
                Signup
              </Link>
            </p>
          </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
