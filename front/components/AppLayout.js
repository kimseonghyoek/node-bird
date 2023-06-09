import React, { } from "react";
import propsTypes from "prop-types";
import Link from "next/link";
import { Input, Menu, Row, Col } from "antd";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import { useSelector } from 'react-redux';

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {

  const { me } = useSelector((state) => state.user);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">노드버드</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">프로필</Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">회원가입</Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          { me ? <UserProfile/> : <LoginForm/> }
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://overloper0225.tistory.com" target="_blank" rel="noreferrer noopener">Mady by Overloper</a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propsTypes = {
  children: propsTypes.node.isRequired,
};

export default AppLayout;
