import React from 'react';
import {Avatar, Box, Button, chakra, HStack} from '@chakra-ui/react';
import {FiLogIn} from 'react-icons/fi';
import {useAuth0} from '@auth0/auth0-react';

function Header() {
  const {user} = useAuth0();

  return (
    <HStack justify='space-between' spacing={2}>
      <Box>Psychodex</Box>

      <Box>{user ? <UserButton /> : <SignInButton />}</Box>
    </HStack>
  );
}

function UserButton() {
  const {user} = useAuth0();

  return <Avatar cursor='pointer' name={user!.name} src={user!.picture} />;
}

function SignInButton() {
  const {loginWithRedirect} = useAuth0();

  return (
    <Button
      aria-label='Sign-in'
      display='flex'
      alignItems='center'
      leftIcon={<FiLogIn />}
      onClick={() => loginWithRedirect()}
    >
      <chakra.span lineHeight='1em' fontSize='1em' height='calc(1em / 10 * 8)'>
        Sign-in
      </chakra.span>
    </Button>
  );
}

export default Header;
