import React, {useCallback} from 'react';
import {Avatar, Button, Card} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import { logoutRequestAction} from '../reducers/user';

const UserProfile = () => {
    const dispatch = useDispatch();
    const { me, isLoggingOut } = useSelector((state) => state.user);
    const onLogOut = useCallback(() => {
        dispatch(logoutRequestAction());
    }, []);

    return (
        <Card actions={[
            <div key="git">Github<br/></div>,
            <div key="following">팔로잉<br/></div>,
            <div key="follower">팔로워<br/></div>,
        ]}>
            <Card.Meta title={me.nickname} avatar={<Avatar>{me.nickname[0]}</Avatar>}/>
            <Button onClick={onLogOut} loading={isLoggingOut}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;