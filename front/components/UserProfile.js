import React, {useCallback} from 'react';
import {Avatar, Button, Card} from 'antd';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers/user';

const UserProfile = () => {
    const dispatch = useDispatch();
    const onLogOut = useCallback(() => {
        dispatch(logoutAction());
    }, []);

    return (
        <Card actions={[
            <div key="git">Github<br/></div>,
            <div key="following">팔로잉<br/></div>,
            <div key="follower">팔로워<br/></div>,
        ]}>
            <Card.Meta title="overloper" avatar={<Avatar>o</Avatar>}/>
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;