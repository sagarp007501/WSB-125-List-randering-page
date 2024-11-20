import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "./assets/css/index.css"
import Header from './Components/Header '
import Home from './Components/Home'
import Footer from './Components/Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Home/>
    <Footer/>
  </StrictMode>
)
