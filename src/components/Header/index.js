import React from 'react';

import { 
  Container,
  Image,
  Buttons,
  Btn
} from './styles';

import {
  DonutLarge,
  Chat,
  MoreVert 
} from '@material-ui/icons';

const Header = ({avatar, setShow}) => {

  const handleNewChat = () => {
    setShow(true);
  }

  return (
    <Container>
      <Image src={avatar} alt="" />
      <Buttons>
        <Btn>
          <DonutLarge style={{color: '#919191'}}/>
        </Btn>
        <Btn onClick={handleNewChat}>
          <Chat style={{color: '#919191'}}/>
        </Btn>
        <Btn>
          <MoreVert style={{color: '#919191'}}/>
        </Btn>
      </Buttons>
    </Container>
  );
};

export default Header;
