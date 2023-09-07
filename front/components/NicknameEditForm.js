import React, {useCallback, useMemo} from "react";
import {Form, Input} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_NICK_NAME_REQUEST } from "../reducers/user";
import useInput from "../hooks/useInput";

const NicknameEditForm = () => {
  const style = useMemo(() => ({ marginBottom: '20px', border: '1px solid #d9d9d9', padding: '20px', borderRadius: '10px'}), []);
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const [nickname, onChangeNickname] = useInput(me?.nickname || '');
  const onSubmit = useCallback(() => {
    dispatch({
      type: CHANGE_NICK_NAME_REQUEST,
      data: nickname
    })
  })

  return (
    <Form style={style} onFinish={onSubmit}>
      <Input.Search addonBefore="닉네임" enterButton="수정" value={nickname} onChange={onChangeNickname} />
    </Form>
  );
};

export default NicknameEditForm;