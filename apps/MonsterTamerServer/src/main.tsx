import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import TamerAutoban from "./TamerAutoban.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <TamerAutoban />
      </BrowserRouter>
  </React.StrictMode>,
)
