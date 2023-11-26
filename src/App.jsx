import { Container } from 'react-bootstrap'

import HeaderAppTitle from './components/HeaderAppTitle'
import TheLayout from './containers/TheLayout'

function App() {
  return (
    <div className="cont d-flex justify-content-center align-items-center">
      <Container>
        <div className="main-content">
          <HeaderAppTitle />
          <TheLayout />
        </div>
      </Container>
    </div>
  )
}

export default App
