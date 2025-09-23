import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { initAOS } from './components/Aos-config'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Contactanos from  './pages/Contactanos'
import Nosotros from './pages/Nosotros'
import Productos from './pages/Productos'
import Promociones from './pages/Promociones'
import Libro from './pages/Libro'

export default function App() {
  useEffect(() => {
    initAOS()
  }, [])

  return (
    <>
      
      <BrowserRouter>
      <ScrollToTop />
      
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contactanos' element={<Contactanos/>}/>
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path='/productos' element={<Productos/>}/>
          <Route path='/promociones' element={<Promociones/>}/>
          <Route path='/libro' element={<Libro/>}/>
        </Routes>
        <Footer />

      </BrowserRouter>
      
    </>
  )
}
