import React from "react";
import AuthForm from "../modules/auth/auth-form";
import { getSession } from "next-auth/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        console.log(session, "session");
        router.replace("/");
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <AuthForm />
    </>
  );
};

export default Auth;
