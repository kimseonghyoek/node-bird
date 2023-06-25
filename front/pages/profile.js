import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import FollowerList from "../components/FollowerList";
import NicknameEditForm from "../components/NicknameEditForm";
import { useSelector } from "react-redux";

const Profile = () => {
  const { me } = useSelector((state) => state.user);
  return (
    <>
      <Head>
        <title>내 프로필 - Node Bird</title>
      </Head>
      <AppLayout>
          <NicknameEditForm/>
          <FollowerList header="팔로잉 목록" data={me.Followings}/>
          <FollowerList header="팔로워 목록" data={me.Followers}/>
      </AppLayout>
    </>
  );
}

export default Profile;