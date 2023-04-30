import { Button, Form, Input } from "antd";
import Link from "next/dist/client/link";
import React, { useCallback, useState } from "react";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  // 컴포넌트에 props로 넘겨주는 함수에는 useCallback을 사용해라
  const onChageId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChagePw = useCallback((e) => {
    setPw(e.target.value);
  }, []);

  return (
    <Form>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChageId} required />
      </div>
      <div>
        <label htmlFor="user-pw">비밀번호</label>
        <br />
        <Input name="user-pw" value={pw} onChange={onChagePw} required />
      </div>
      <div>
        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </div>
    </Form>
  );
};

export default LoginForm;
