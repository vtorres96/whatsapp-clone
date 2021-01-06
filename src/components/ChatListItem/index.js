import React, { useState, useEffect } from 'react';

import { 
  Container, 
  Lines,
  Line,
  Avatar,
  Name,
  Date,
  LastMessage 
} from './styles';

const ChatListItem = ({onClick, active, data}) => {
  const [time, setTime] = useState('');

  useEffect(()=>{
    if(data.lastMessageDate > 0) {
      let d = new window.Date(data.lastMessageDate.seconds * 1000);
      let hours = d.getHours();
      let minutes = d.getMinutes();
      hours = hours < 10 ? '0'+hours : hours;
      minutes = minutes < 10 ? '0'+minutes : minutes;
      setTime(`${hours}:${minutes}`);
    }
  },[data]);

  return (
    <Container onClick={onClick} className={active ? 'active' : ''}>
      <Avatar src={data.image} alt=""/>
      <Lines>
        <Line>
          <Name>{data.title}</Name>
          <Date>{time}</Date>
        </Line>
        <Line>
          <LastMessage>
            <p>{data.lastMessage}</p>
          </LastMessage>
        </Line>
      </Lines>
    </Container>
  );
};

export default ChatListItem;
