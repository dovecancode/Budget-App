import { Container } from 'react-bootstrap'

import HeaderAppTitle from './components/HeaderAppTitle'
import TheLayout from './containers/TheLayout'

function App() {
  return (
    <div className="cont d-flex justify-content-center align-items-center">
      <div className="main-content">
        <Container>
          <HeaderAppTitle />
          <TheLayout />
        </Container>
      </div>
    </div>
  )
}

export default App
