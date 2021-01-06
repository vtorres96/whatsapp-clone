import React, { useState, useEffect } from 'react';
import api from './services/api';

import Login from './components/Login';
import SideBar from './components/SideBar';
import ContentArea from './components/ContentArea';

import GlobalStyles, { AppWindow } from './styles/GlobalStyles';

const App = () => {

  const [activeChat, setActiveChat] = useState([]);
  const [chatList, setChatList] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(()=>{
    if(user !== null){
      let unsub = api.onChatList(user.id, setChatList);
      return unsub;
    }
  }, [user]);

  const handleLoginData = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    };
    // register in db
    await api.addUser(newUser);
    setUser(newUser);
  }
  
  if(!user){
    return (<Login onReceive={handleLoginData} />);
  }

  return (
    <>
      <AppWindow>
        <SideBar 
          user={user} 
          chatList={chatList} 
          activeChat={activeChat} 
          setActiveChat={setActiveChat}
        />
        <ContentArea user={user} activeChat={activeChat} />
      </AppWindow>      
      <GlobalStyles />
    </>
  )
}

export default App;