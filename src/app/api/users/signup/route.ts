import { connect } from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"


connect();

export async function POST(request:NextRequest) {
   try {
    const reqBody = await request.json();
    const {username, email, password} = reqBody;
    console.log(reqBody, "reqBody");
    //Check if the user is already exists
    const user = await User.findOne({email});

    if (user) {
      return NextResponse.json({error: "User already exists"}, {status: 400})
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    })
    const savedUser = await newUser.save();
    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    })
   } catch (err:any) {

   }
}