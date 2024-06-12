import connectDB from "@/config/database";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  // Destructure the form fields
  const { username, email, password } = await request.json();

  // Connect to database
  await connectDB();

  // Check if username exists
  const existingUsername = await User.findOne({ username });

  if (existingUsername) {
    return new NextResponse(
      JSON.stringify({ message: "Username already exists." }),
      { status: 400 },
    );
  }

  // Check if email exists
  const existingEmail = await User.findOne({ email });

  if (existingEmail) {
    return new NextResponse(
      JSON.stringify({ message: "Email already exists." }),
      { status: 400 },
    );
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 5);

  // Create the new user
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    // Save the user in database
    await newUser.save();
    return new NextResponse(
      JSON.stringify({ message: "User successfully registered." }),
      { status: 200 },
    );
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};
