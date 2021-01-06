import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { 
  Container,
  Head,
  BackButton,
  HeadTitle,
  List,
  Item,
  Image,
  Name
 } from './styles';

import { ArrowBack } from '@material-ui/icons';

const NewChat = ({user, chatList, show, setShow}) => {

  const [list, setList] = useState([]);

  useEffect(()=>{
    const getList = async () => {
      if(user !== null)
      {
        let results = await api.getContactList(user.id);
        setList(results)        
      }
    }
    getList();
  },[user]);

  const addNewChat = async (user2) => {
    await api.addNewChat(user, user2);

    handleClose();
  }

  const handleClose = () => {
    setShow(false)
  }

  return (
    <Container style={{left: show ? 0: -415}}>
      <Head>
        <BackButton onClick={handleClose}>
          <ArrowBack style={{color: '#FFF'}}/>
        </BackButton>
        <HeadTitle>Nova Conversa</HeadTitle>
      </Head>
      <List>
        {list.map((item, key)=>(
          <Item 
            key={key}
            onClick={()=>addNewChat(item)} 
          >
            <Image src={item.avatar} alt=""/>
            <Name>{item.name}</Name>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default NewChat;
