import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Monolayer from './pages/machines/MonolayerMachine'
import AbaThreeLayer from './pages/machines/AbaThreeLayerMachine'
import AbcThreeLayer from './pages/machines/AbcThreeLayerMachine'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/machines/monolayer" element={<Monolayer />} />
        <Route path="/machines/aba" element={<AbaThreeLayer />} />
        <Route path="/machines/abc" element={<AbcThreeLayer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App