'use client';
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignupPage = () => {
  const [user, setUser] = React.useState({
    email: '',
    password: '',
    username: '',
  })
  const router = useRouter();
  const onSignup = async () => {
    try {
      const response  = await axios.post("/api/users/signup", user);
      console.log("Signup Successful", response);
      router.push("/login")
    } catch (error:any) {
      console.log("Signup Failed", error.message);
    } finally {
       
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ppy-2 ">
      <h1 className="text-2xl">Signup</h1>
      <label htmlFor="username">Username</label>
      <input 
      className="p-2 border border-gray-300 rounded-lg mb-r focus:outline-none focus: border-gray-600"
      id="username" 
      type="text" 
      value={user.username}
      onChange={(e) => setUser({...user, username: e.target.value})}
      />
      <hr />
      <label htmlFor="email">email</label>
      <input 
      className="p-2 border border-gray-300 rounded-lg mb-r focus:outline-none focus: border-gray-600"
      id="email" 
      type="text" 
      value={user.email}
      onChange={(e) => setUser({...user, email: e.target.value})}
      />
      <hr />
      <label htmlFor="password">password</label>
      <input 
      className="p-2 border border-gray-300 rounded-lg mb-r focus:outline-none focus: border-gray-600"
      id="password" 
      type="password" 
      value={user.password}
      onChange={(e) => setUser({...user, password: e.target.value})}
      />
      <button
      onClick={onSignup}
      className="p-2 mt-5 border border-gray-300 rounded-lg mb-4 focus:outline-none foucs:border-gray-600"
      >Signup</button>
      <Link href="/login">Visit Login Page</Link>
    </div>
  )
}

export default SignupPage;