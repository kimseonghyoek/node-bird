import React, {useCallback, useEffect, useState} from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import {Button, Checkbox, Form, Input} from "antd";
import useInput from "../hooks/useInput";
import styled from "styled-components";
import { SIGN_UP_REQUEST } from "../reducers/user";
import Router from 'next/router';
import { useDispatch, useSelector } from "react-redux";

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = () => {
  const dispatch = useDispatch();
  const { signUpLoading, signUpDone, signUpError } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [pw, onChangePw] = useInput('');
  const [pwCheck, setPwCheck] = useState('');
  const [pwError, setPwError] = useState(false);
  const onChangePwCheck = useCallback((e) => {
    setPwCheck(e.target.value);
    setPwError(e.target.value !== pw)
  }, [pw]);
  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback(() => {
    setTerm(!term);
    setTermError(false)
  }, [term]);

  useEffect(() => {
    if(signUpDone) {
      Router.push("/");
    }
  }, [signUpDone]);

  useEffect(() => {
    if(signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);


  const onSubmit = useCallback(() => {
    if(pw !== pwCheck) {
      return setPwError(true);
    }
    if(!term) {
      return setTermError(true);
    }
    console.log(email, nickname, pw);
    dispatch({
      type: SIGN_UP_REQUEST,
      data: {email, pw, nickname}
    })
  }, [pw, pwCheck, term]);

  return (
    <AppLayout>
      <Head>
        <title>회원가입 - Node Bird</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-email">이메일</label>
          <br/>
          <Input name="user-email" type="email" value={email} required onChange={onChangeEmail}/>
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br/>
          <Input name="user-nick" value={nickname} required onChange={onChangeNickname}/>
        </div>
        <div>
          <label htmlFor="user-pw">비밀번호</label>
          <br/>
          <Input name="user-pw" type="password" value={pw} required onChange={onChangePw}/>
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호체크</label>
          <br/>
          <Input name="user-password-check" type="password" value={pwCheck} required onChange={onChangePwCheck}/>
          {pwError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>동의하는 부분?</Checkbox>
          { termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
        </div>
        <div style={{ marginTop: 10}}>
          <Button type="primary" htmlType="submit" loading={signUpLoading}>가입하기</Button>
        </div>
      </Form>
    </AppLayout>
  );
}

export default Signup;