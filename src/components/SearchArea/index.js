import React from 'react';

import { 
  Container,
  SearchInput,
  Input
} from './styles';

import { Search } from '@material-ui/icons';

const SearchArea = () => {
  return (
    <Container>
      <SearchInput>
        <Search fontSize="small" style={{color: '#919191'}}/>
        <Input type="search" placeholder="Procurar ou começar uma nova conversa" />
      </SearchInput>
    </Container>
  );
};

export default SearchArea;
