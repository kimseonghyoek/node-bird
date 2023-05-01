import React, {useCallback} from 'react';
import {Avatar, Button, Card} from 'antd';

const UserProfile = ({ setIsLoggedIn }) => {
    const onLogOut = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    return (
        <Card actions={[
            <div key="git">Github<br/></div>,
            <div key="following">팔로잉<br/></div>,
            <div key="follower">팔로워<br/></div>,
        ]}>
            <Card.Meta title="Overloper" avatar={<Avatar>OV</Avatar>}/>
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;