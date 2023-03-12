import React from 'react';
import {Box} from '@chakra-ui/react';
import Header from './ui/Header';
import Pokemons from './ui/Pokemons';

function App() {
  return (
    <Box as='main' mx='auto' width='100%' maxW='4xl' padding={2}>
      <Header />
      <Pokemons />
    </Box>
  );
}

export default App;
