import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Notfound from './pages/Notfound'
import { BrowserRouter,Routes,Route} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Movies" element={<Movies />} />
    <Route path='/*' element={<Notfound />} /> 
    </Routes>
  
    </BrowserRouter>
  
  </StrictMode>,
)
