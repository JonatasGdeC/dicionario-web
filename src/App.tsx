import EstiloGlobal, { Container } from './styles'
import Header from './containers/Header'
import Body from './containers/Body'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Header />
        <Body />
      </Container>
    </>
  )
}

export default App
