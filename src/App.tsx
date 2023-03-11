import React from 'react';
import {Box, VStack} from '@chakra-ui/react';
import {useQuery} from '@apollo/client';
import {gql} from './__generated__';

const GET_DRUGS = gql(/* GraphQL */ `
  query GetDrugs {
    substances {
      name
      url
    }
  }
`);

function App() {
  const {data} = useQuery(GET_DRUGS);

  return (
    <Box>
      <VStack>
        {data?.substances?.map((substance) => (
          <Box key={substance!.name}>{substance!.name}</Box>
        ))}
      </VStack>
    </Box>
  );
}

export default App;
