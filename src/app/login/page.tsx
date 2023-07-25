'use client';
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const LoginPage = () => {
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  })
  const router = useRouter();
  
  const onLogin = async () => {
    try {
      const resp = await axios.post("/api/users/login", user);
      console.log(resp,'resp');
      router.push("/profile");
    } catch (err:any) {
      console.log("Login Failed", err.message);
    } finally {

    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ppy-2 ">
      <h1 className="text-2xl">Login</h1>
      <label htmlFor="email">Email</label>
      <input 
      className="p-2 border border-gray-300 rounded-lg mb-r focus:outline-none focus: border-gray-600"
      id="email" 
      type="text" 
      value={user.email}
      onChange={(e) => setUser({...user, email: e.target.value})}
      />
      <hr />
      <label htmlFor="password">Password</label>
      <input 
      className="p-2 border border-gray-300 rounded-lg mb-r focus:outline-none focus: border-gray-600"
      id="password" 
      type="password" 
      value={user.password}
      onChange={(e) => setUser({...user, password: e.target.value})}
      />
      <button
      onClick={onLogin}
      className="p-2 mt-5 border border-gray-300 rounded-lg mb-4 focus:outline-none foucs:border-gray-600"
      >Login</button>
      <Link href="/signup">Visit Signup Page</Link>
    </div>
  )
}

export default LoginPage;