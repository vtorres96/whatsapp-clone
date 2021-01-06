import React, { useState, useEffect } from 'react';

import { Container, Item, Text, Date } from './styles';

const MessageItem = ({data, user}) => {

  const [time, setTime] = useState('');

  useEffect(()=>{
    if(data.date > 0) {
      let d = new window.Date(data.date.seconds * 1000);
      let hours = d.getHours();
      let minutes = d.getMinutes();
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      setTime(`${hours}:${minutes}`);
    }
  },[data]);

  return (
    <Container style={{justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'}}>
      <Item style={{backgroundColor: user.id === data.author ? '#DCF8C6' : '#FFF'}}>
        <Text>{data.body}</Text>
        <Date>{time}</Date>
      </Item>
    </Container>
  );
};

export default MessageItem;
