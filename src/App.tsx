import React from 'react';
import {Box, Button, chakra, HStack, VStack} from '@chakra-ui/react';
import {useQuery} from '@apollo/client';
import {gql} from './__generated__';
import {FiLogIn} from 'react-icons/fi';
import {useAuth0} from '@auth0/auth0-react';

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

  const {loginWithRedirect} = useAuth0();

  const handleSignIn = async () => {
    await loginWithRedirect({});
  };

  return (
    <Box as='main' mx='auto' width='100%' maxW='7xl' padding={2}>
      <HStack justify='space-between' spacing={2}>
        <Box>Psychodex</Box>
        <Box>
          <Button
            aria-label='Sign-in'
            display='flex'
            alignItems='center'
            leftIcon={<FiLogIn />}
            onClick={handleSignIn}
          >
            <chakra.span
              lineHeight='1em'
              fontSize='1em'
              height='calc(1em / 10 * 8)'
            >
              Sign-in
            </chakra.span>
          </Button>
        </Box>
      </HStack>
      <VStack>
        {data?.substances?.map((substance) => (
          <Box key={substance!.name}>{substance!.name}</Box>
        ))}
      </VStack>
    </Box>
  );
}

export default App;
