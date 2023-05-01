import React from "react";
import {Button, Card, List} from "antd";
import {StopOutlined, UserOutlined} from "@ant-design/icons";
import propsType from 'prop-types';

const FollowerList = ({ header, data }) => {
  return (
    <List
      style={{ marginBottom: 20 }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{header}</div>}
      loadMore={<div style={{ textAlign: 'center', margin: '10px 0'}}><Button>더 보기</Button></div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ marginTop: 20}}>
          <Card actions={[<UserOutlined/> ]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};

FollowerList.propsType = {
  header: propsType.string.isRequired,
  data: propsType.array.isRequired
}

export default FollowerList;