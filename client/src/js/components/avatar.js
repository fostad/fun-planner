import React from 'react';
import ReactAvatar, { ConfigProvider } from 'react-avatar';

const Avatar = (props) => {
  const { color, size, user } = props;
  const name = user ? user.name : ' ';
  const image = user ? user.image : undefined;
  return (
    <ReactAvatar name={name} round={true} color={color} size={size} src={image}/>
  );
};

export default Avatar;
