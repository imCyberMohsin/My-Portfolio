import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
      <BrowserRouter>
        <Toaster position='bottom-center' />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Skills" element={<Skills />}></Route>
          <Route path="/Portfolio" element={<Portfolio />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
