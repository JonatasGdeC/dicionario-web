import React from 'react'
import EstiloGlobal, { Container } from './styles'
import Header from './containers/Header'

function App() {
  return(
    <>
      <EstiloGlobal />
      <Container>
        <Header />
      </Container>
    </>

  )
}

export default App
