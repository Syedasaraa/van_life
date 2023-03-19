import React, { useState } from "react";
import { useNavigate, useNavigation, useLocation , Form, useActionData} from "react-router-dom";
import { loginUser } from "./api";

export async function action ({request}) {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")
  try {
    localStorage.setItem("loggedin", true)
    const data = await loginUser( {email, password} )
    return data
  } catch (err) {
    return {
      error: err.message
    }
  }
}

export default function Login() {
    const {state} = useLocation()
    const navigate = useNavigate()
    const navigation = useNavigation()
    const actionData = useActionData()

    if( actionData?.token ){
     navigate(state? state.pathName : "/host" , {replace:true})
    }

  return (
    <div className="w-[40%] mx-auto">
        <div>
            {state&& <div className="text-center text-[20px] text-red-400">You must be logged in</div>}
        </div>
      <h1 className="text-venter m-3 font-bold text-[30px] text-center">
        Sign in to your account
      </h1>

      <div>
        {actionData?.error && <div className="text-red-600 m-2 text-center font-bold"> {actionData?.error}</div>}
      </div>
      <Form action="/login" method = "post"  className="flex flex-col gap-4">
        <input
          className="p-3 rounded border focus:border-sky-200 outline-none"
          name="email"
          type="email"
          placeholder="Email address"
        />
        <input
          className="p-3 rounded border outline-none focus:border-sky-200" 
          name="password"
          type="password"
          placeholder="Password"
        />
        <button
        disabled= {navigation.state === "submitting" ? true : false}
        className={`p-3 rounded ${navigation.state === "submitting" ? "bg-[#AAAAAA]" : " bg-orange-400"} text-white`}
        >
          {navigation.state === "submitting"? "Loggin in... " : "Login" }</button>
      </Form>
    </div>
  );
}
