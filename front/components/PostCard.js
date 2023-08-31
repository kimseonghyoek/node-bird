import React, {useCallback, useState} from 'react';
import {Avatar, Button, Card, Image, List, Popover, } from "antd";
import {
  EllipsisOutlined,
  HeartOutlined,
  HeartTwoTone,
  MessageOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import PostImages from "./PostImages";
import CommentForm from "./CommentForm";
import PostCardContent from "./PostCardContent";
import { REMOVE_POST_REQUEST } from '../reducers/post';
import FollowButton from './FollowButton';

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { removePostLoading } = useSelector((state) => state.post)
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  const onRemovePost = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id
    })
  }, [])

  const id = useSelector((state) => state.user.me?.id);
    return (
      console.log(post.User),
        <div style={{ marginBottom: 20}}>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                  <RetweetOutlined key="retweet"/>,
                  liked ? <HeartTwoTone twoToneColor="#eb2f96" onClick={onToggleLike} key="heart"/> : <HeartOutlined onClick={onToggleLike} key="heart"/>,
                  <MessageOutlined key="comment" onClick={onToggleComment}/>,
                  <Popover key="more" content={(
                    <Button.Group>
                      { id && post.User === id ? (
                        <>
                          <Button>수정</Button>
                          <Button type="danger" loading={removePostLoading} onClick={onRemovePost}>삭제</Button>
                        </>
                      ) : <Button>신고</Button>}
                    </Button.Group>
                  )}>
                    <EllipsisOutlined/>
                  </Popover>
                ]}
                extra={id && <FollowButton post={post}/> }
            >
                <Image/>
                <Card.Meta
                  avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                  title={post.nickname}
                  description={<PostCardContent postData={post.content}/> }
                  />
            </Card>
          {commentFormOpened && (<div>
            <CommentForm post={post}/>
            <List header={`${post.Comment.length}개의 댓글`} itemLayout="horizontal" dataSource={post.Comment} renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={<div>{item.User.nickname}</div>}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  description={item.content}
                />
              </List.Item>
            )} />
          </div>)}
            {/*<CommentForm/>*/}
            {/*<Comments/>*/}
        </div>
    )
}

export default PostCard