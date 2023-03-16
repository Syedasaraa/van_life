import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "./api";
export default function Login() {
    const {state} = useLocation()

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="w-[40%] mx-auto">
        <div>
            {state&& <div className="text-center text-[20px] text-red-400">You must be logged in</div>}
        </div>
      <h1 className="text-venter m-3 font-bold text-[30px] text-center">
        Sign in to your account
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="p-3 rounded border focus:border-sky-200 outline-none"
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          className="p-3 rounded border outline-none focus:border-sky-200" 
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button
        className="p-3 rounded bg-orange-400 text-white"
        >Login</button>
      </form>
    </div>
  );
}
