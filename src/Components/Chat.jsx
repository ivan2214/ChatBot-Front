import React, { useState } from 'react'
import axios from 'axios'
import { HStack, List, ListIcon, ListItem, Stack, Text, VStack } from '@chakra-ui/layout'

import { PhoneIcon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'
import { FormControl } from '@chakra-ui/form-control'
import { Spinner } from '@chakra-ui/spinner'

function Chat() {
  const [messages, setMessages] = useState([
    {
      response: '',
      from: '',
      meMessage: ''
    }
  ])

  const [input, setInput] = useState('')

  const sendMessage = async (message) => {
    const res = await axios.post('http://localhost:3001/send', { message })
    setMessages([
      ...messages,
      {
        response: res.data.response,
        from: 'me',
        meMessage: res.data.meMesssage
      }
    ])
  }

  let mensajes = messages.slice(1)

  const handleSubmit = (event) => {
    event.preventDefault()
    sendMessage(input)
    setInput('')
  }

  return (
    <Stack
      w='100%'
      minH='full'
      h='full'
      bg='gray.700'
      direction='column-reverse'
      borderRadius='base'
      align='center'
      p={10}
    >
      <form onSubmit={handleSubmit}>
        <FormControl display='flex' gap={5} alignItems='center' justifyContent='center' w='full'>
          <Input
            placeholder='Mensaje'
            w='full'
            color='whiteAlpha.900'
            _placeholder={{ color: '#whiteAlpha.500' }}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button colorScheme='blue' variant='solid' size='md' type='submit'>
            Enviar
          </Button>
        </FormControl>
      </form>

      <VStack overflowY='scroll' p={5} align='center' justify='center' w='full'>
        {mensajes?.map((message, i) => {
          return (
            <List
              key={i}
              p={5}
              w='full'
              justifyContent={`${message.from == 'me' ? 'flex-end' : 'flex-start'}`}
            >
              <ListItem
                w='full'
                display='block'
                color={`${message.from == 'me' ? 'green.300' : 'whiteAlpha.900'}`}
              >
                {message.meMessage}
              </ListItem>
              <ListItem w='full' display='block' color='whiteAlpha.900'>
                {message.response}
              </ListItem>
            </List>
          )
        })}
      </VStack>
    </Stack>
  )
}

export default Chat
