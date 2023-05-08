import React from "react";
import AppLayout from "../components/AppLayout";
import { useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <AppLayout>
      { isLoggedIn && <PostForm/>}
      {/* eslint-disable-next-line react/jsx-key */}
      { mainPosts.map((post) => <PostCard id={post.id} post={post}/>)}
    </AppLayout>
  );
};

export default Home;
