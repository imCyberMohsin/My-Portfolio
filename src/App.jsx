import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Skills" element={<Skills />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>

  )
}

export default App
