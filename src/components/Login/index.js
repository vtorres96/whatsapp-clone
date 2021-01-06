import React from 'react';
import api from '../../services/api';

import { Container } from './styles';

const Login = ({onReceive}) => {

  const handleFacebookLogin = async () => {
    let result = await api.fbPoup(); 
    
    if(result){
      onReceive(result.user);
    } else {
      alert("Erro!");
    }
  }

  return (
    <Container>
      <button onClick={handleFacebookLogin}>Logar com facebook</button>
    </Container>
  );
};

export default Login;
