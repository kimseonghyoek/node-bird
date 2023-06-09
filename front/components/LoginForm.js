import { Button, Form, Input } from "antd";
import Link from "next/dist/client/link";
import React, { useCallback, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import { loginRequestAction } from "../reducers/user";

const ButtonWrap = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const { logInLoading } = useSelector((state) => state.user);

  // 컴포넌트에 props로 넘겨주는 함수에는 useCallback을 사용해라
  const onChageId = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const onChagePw = useCallback((e) => {
    setPw(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
      console.log(email, pw);
      dispatch(loginRequestAction(email, pw));
  }, [email, pw]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-email">이메일</label>
        <br />
        <Input name="user-email" value={email} onChange={onChageId} required />
      </div>
      <div>
        <label htmlFor="user-pw">비밀번호</label>
        <br />
        <Input.Password name="user-pw" value={pw} onChange={onChagePw} required />
      </div>
      <ButtonWrap>
        <Button type="primary" htmlType="submit" loading={logInLoading}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </ButtonWrap>
    </FormWrapper>
  );
};

export default LoginForm;
