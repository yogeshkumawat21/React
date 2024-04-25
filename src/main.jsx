import React from 'react'
import ReactDOM from 'react-dom/client'

import './App.css'
import Header from './Header'
// import Section from './Section'
import Section from './Section'
import Footer from './Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Header/>
   <Section/>
   <Footer/>
  </React.StrictMode>,
)
