import React from 'react';
import ReactAvatar, { ConfigProvider } from 'react-avatar';

const Avatar = (props) => {
  const { color, size } = props;
  return (
    <ReactAvatar name="Fatemeh Ostad" round={true} color={color} size={size}/>
  );
};

export default Avatar;
