import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Navbar from './Components/Navbar.tsx'
import Footer from './Components/Footer.tsx'
import Result from './pages/Result.tsx'
import Layout from './pages/Layout.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';
// import GradeCalculator from "./Pages/Grade";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>    
    <Navbar/>
    <App /> 
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
