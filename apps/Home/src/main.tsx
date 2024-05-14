import React from 'react'
import ReactDOM from 'react-dom/client'
// import WelcomeToHome from './WelcomeToHome.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Autoban from "./Autoban.tsx";






ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
          <Autoban />
  </React.StrictMode>,
)
