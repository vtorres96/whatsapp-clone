import React, { useState } from 'react';

import NewChat from '../NewChat';
import Header from '../Header';
import SearchArea from '../SearchArea';
import ChatList from '../ChatList';

import { Container } from './styles';

const SideBar = ({user, chatList, activeChat, setActiveChat}) => {
  const [showNewChat, setShowNewChat] = useState(false);

  return (
    <Container>
      <NewChat
        chatList={chatList}
        user={user} 
        show={showNewChat}
        setShow={setShowNewChat}
      />
      <Header avatar={user.avatar} setShow={setShowNewChat}/>
      <SearchArea />
      <ChatList 
        chatList={chatList} 
        activeChat={activeChat} 
        setActiveChat={setActiveChat}
      />
    </Container>
  );
};

export default SideBar;
