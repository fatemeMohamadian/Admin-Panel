import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function GroupAvatars() {
    return (
        <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src="/avatar-1.png" />
            <Avatar alt="Travis Howard" src="/avatar-2.png" />
            <Avatar alt="Cindy Baker" src="/avatar-3.png" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
    );
}
