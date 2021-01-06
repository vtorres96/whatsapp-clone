import React from 'react';

import ChatWindow from "../ChatWindow";
import ChatIntro from "../ChatIntro";

import { Container } from './styles';

const ContentArea = ({user, activeChat}) => {
  return (
    <Container>
      {activeChat.chatId !== undefined && 
        <ChatWindow 
          user={user}
          data={activeChat}
        />
      }
      {activeChat.chatId === undefined && 
        <ChatIntro />
      }
    </Container>
  );
};

export default ContentArea;
