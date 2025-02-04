import Home from "./pages/Home"
import { Route } from 'react-router-dom'

function App() {


  return (
     <>
      <Route path="/" element={<Home />} />
     </>
  )
}

export default App
