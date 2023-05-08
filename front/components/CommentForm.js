import {Button, Form, Input} from "antd";
import {useCallback} from "react";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  const [commentText, setCommentText] = useInput('');
  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
  }, [commentText])
  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: 'relative', margin: top}}>
        <Input.TextArea value={commentText} onChange={setCommentText} rows={4}/>
        <Button type={"primary"} style={{ position: "absolute", right: 0, bottom: -40 }} htmlType="submit">등록</Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.propsType = {
  post: PropTypes.object.isRequired
}

export default  CommentForm;