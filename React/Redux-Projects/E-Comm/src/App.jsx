import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import {Routes,Route} from 'react-router-dom'
import CardDetails from './components/CardDetails';
import Cards from './components/Cards';
import Cart from './components/Cart';
function App() {
  
  return (
    <>
     <Header/>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/details/:id" element={<CardDetails />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
