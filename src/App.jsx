 
import './App.css'
import Dashboard from './components/Dashboard'
import { ChakraProvider } from '@chakra-ui/react'
function App() { 

  return (
    <><ChakraProvider>
      <Dashboard />
      </ChakraProvider>
    </>
  )
}

export default App
