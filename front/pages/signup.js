import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/dist/next-server/lib/head";

const Signup = () => {
  return (
    <>
      <Head>
        <title>회원가입 - Node Bird</title>
      </Head>
      <AppLayout>회원 가입</AppLayout>
    </>
  );
}

export default Signup;