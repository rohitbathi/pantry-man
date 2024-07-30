import React from "react";

export default function Signupcard(){
    return(
        <form action="#" className="flex flex-col items-center w-2/5 bg-slate-300 rounded-3xl">
            <input className="border-black border rounded border-spacing-1 px-2 py-1 my-6 w-2/5" type="text" name="username" id="username" placeholder="Username"/>
            <input className="border-black border rounded border-spacing-1 px-2 py-1 my-6 w-2/5"type="email"  name="email" id="email" placeholder="Enter email address"/>
            <input className="border-black border rounded border-spacing-1 px-2 py-1 my-6 w-2/5" type="password" name="password" id="password" placeholder="Password"/>
            <input className="border-black border rounded border-spacing-1 px-2 py-1 my-6 w-2/5" type="password" name="re-password" id="re-password" placeholder="Re-enter Password"/>
            <input className="border-black border rounded border-spacing-1 px-2 py-1 my-6 bg-white w-1/6" type="button" value="Signup" />
        </form>
    )
}