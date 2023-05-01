import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import FollowerList from "../components/FollowerList";
import NicknameEditForm from "../components/NicknameEditForm";

const Profile = () => {
  const followerList = [{nickname: "son"}, {nickname: "kane"}, {nickname: "ben"}];
  const followingList = [{nickname: "messi"}, {nickname: "neymar"}, {nickname: "ramos"}];

  return (
    <>
      <Head>
        <title>내 프로필 - Node Bird</title>
      </Head>
      <AppLayout>
          <NicknameEditForm/>
          <FollowerList header="팔로잉 목록" data={followingList}/>
          <FollowerList header="팔로워 목록" data={followerList}/>
      </AppLayout>
    </>
  );
}

export default Profile;