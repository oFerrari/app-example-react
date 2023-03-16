import './App.css'
import { Gallery } from './components/Gallery'
import { Menu } from './components/Menu'
import { NavBarMenu } from './components/NavBarMenu'
import { Home } from './pages/Home'
import { StateExample } from './pages/StateExample'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div id="App">
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/gallery' element={<Gallery/>} />
        </Routes>
        <NavBarMenu />
     </BrowserRouter>
    </div>
  )
}

export default App
