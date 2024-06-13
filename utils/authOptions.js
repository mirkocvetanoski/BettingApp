import connectDB from "@/config/database";
import User from "@/models/User";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password,
            );
            if (isPasswordCorrect) {
              return user;
            }
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // Invoked on successful signin
    async signIn({ profile, account }) {
      if (account?.provider == "credentials") {
        return true;
      }

      if (account?.provider === "google") {
        // 1. Connect to database
        await connectDB();
        // 2. Check if user exists
        const userExists = await User.findOne({ email: profile.email });
        // 3. If not, then add user to database
        if (!userExists) {
          // Truncate user name if too long
          const username = profile.name.slice(0, 20).toLowerCase();

          await User.create({
            username,
            email: profile.email,
          });
        }
        // 4. Return true to allow sign in
        return true;
      }
    },
    // Modifies the session object
    async session({ session }) {
      // 1. Get user from database
      const user = await User.findOne({ email: session.user.email });
      // 2. Assign the user id to the session
      session.user.id = user._id.toString();
      // 3. return session
      return session;
    },
  },
};
