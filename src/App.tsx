import React from 'react'
import './App.css'
import {Box, Container, Flex, Heading, Spacer} from '@chakra-ui/react'
import {MoonIcon} from './icons/MoonIcon'
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Container>
          <Box paddingTop="20">
            <Flex>
              <Heading color="white">TODO</Heading>
              <Spacer />
              <MoonIcon />
            </Flex>
          </Box>
        </Container>
      </div>
    </div>
  )
}

export default App
