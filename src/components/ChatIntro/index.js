import React from 'react';

import { Container } from './styles';
import whatsappConnection from '../../assets/connection-wifi-whatsapp.jpg';

const ChatIntro = () => {
  return (
    <Container>
      <img src={whatsappConnection} alt=""/>
      <h1>Mantenha seu celular conectado</h1>
      <h2>
        O Whatsapp conecta ao seu telefone para sincronizar suas mensagens. <br/>
        Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.
      </h2>
    </Container>
  );
};

export default ChatIntro;
