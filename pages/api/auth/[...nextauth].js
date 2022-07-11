import NextAuth from "next-auth";
import React from "react";

import { verifyPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {

        const client = await connectToDatabase();

        const usersCollection = client.db().collection("users");

        const myuser = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!myuser) {
          client.close();
          throw new Error("No user found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          myuser.password
        );

        if (!isValid) {
          client.close();
          throw new Error("Could not log you in!");
        }

        client.close();
        return {
          name: myuser.name,
          email: myuser.email,
          gender: myuser.gender,
          rule: myuser.rule,
        };
      },
    }),
  ],

  callbacks: {
    session: async (session) => {
      if (!session) return;

      const client = await connectToDatabase();
      const usersCollection = client.db().collection("users");

      const userData = await usersCollection.findOne({
        email: session.user.email,
      });

      return {
        session: {
          user: {
            id: userData._id,
            name: userData.name,
            gender: userData.gender,
            isAdmin: userData.rule,
            email: userData.email,
          },
        },
      };
    },
  },
});
