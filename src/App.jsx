/* import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control' */
/* import { Input } from '@chakra-ui/input' */
import { Box, Stack, Text } from '@chakra-ui/layout'
/* import { io } from 'socket.io-client' */

import React from 'react'
import Chat from './Components/Chat'

/* const socket = io('http://localhost:3001') */

function App() {
  return (
    <Stack
      align='center'
      justify='center'
      bg='gray.900'
      minH='100vh'
      minW='full'
      w='full'
      maxW='full'
      overflow='hidden'
      maxH='100vh'
    >
      <Text color='whiteAlpha.700' fontSize='2xl'>
        ChatBot
      </Text>

      <Stack h="96" w="50%">
        <Chat />
      </Stack>
    </Stack>
  )
}

export default App
