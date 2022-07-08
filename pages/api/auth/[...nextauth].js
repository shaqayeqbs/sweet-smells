import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import React from "react";

import { verifyPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

import CredentialsProvider from "next-auth/providers/credentials";

let myuser;
export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        console.log(credentials);
        const client = await connectToDatabase();

        const usersCollection = client.db().collection("users");

        myuser = await usersCollection.findOne({
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

        console.log(myuser.rule, "heyyyyyyyyyyyyyyyyyyyy", myuser);
        client.close();
        return {
          name: myuser.name,
          email: myuser.email,
          image: myuser.rule,
          gender: myuser.gender,
          rule: myuser.rule,
        };
      },
    }),
  ],
  // callbacks: {
  //   async jwt({ token, account }) {
  //     console.log(token, account, "acooooooooo");
  //     // Persist the OAuth access_token to the token right after signin
  //     if (account) {
  //       token.accessToken = account.access_token;
  //       return token;
  //     }
  //   },
  //   async session({ session, token, user }) {
  //     console.log(session, token, user, "seeeeeeeeeeeeeeeeee", myuser.rule);
  //     if (session) {
  //       session.user.isAdmin = myuser.rule;
  //       // Send properties to the client, like an access_token from a provider.
  //       // session.accessToken = token.accessToken;
  //       return Promise.resolve(session);
  //     }
  //   },
  // },
});
