import React from 'react';

import ChatListItem from '../ChatListItem';

import { Container } from './styles';

const ChatList = ({chatList, activeChat, setActiveChat}) => {
  return (
    <Container>
      {chatList.map((item, key) => (
        <ChatListItem 
          key={key}  
          data={item}
          active={activeChat.chatId === chatList[key].chatId}
          onClick={() => setActiveChat(chatList[key])}
        />
      ))}
    </Container>
  );
};

export default ChatList;
