import React, { useEffect } from "react";
import AppLayout from "../components/AppLayout";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import { LOAD_POST_REQUEST } from "../reducers/post";

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST
    });
    dispatch({
      type: LOAD_POST_REQUEST
    })
  }, [])

  return (
    <AppLayout>
      { me && <PostForm/>}
      {/* eslint-disable-next-line react/jsx-key */}
      { mainPosts.map((post) => <PostCard id={post.id} post={post}/>)}
    </AppLayout>
  );
};

export default Home;
