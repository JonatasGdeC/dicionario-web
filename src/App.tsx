import React, { useState } from 'react';
import axios from 'axios';

import EstiloGlobal, { Container } from './styles'
import Header from './containers/Header'
import Body from './containers/Body'

const App: React.FC = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = async (word: string) => {
    try {
      setSearchResults([]);
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Erro na pesquisa:', error);
    }
  };

  return (
    <>
      <EstiloGlobal />
      <Container>
        <Header onSearch={handleSearch}/>
        <Body searchResults={searchResults}/>
      </Container>
    </>
  )
}

export default App
