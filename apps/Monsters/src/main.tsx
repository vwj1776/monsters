import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import MonsterAutoban from "./MonsterAutoban.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <MonsterAutoban />
      </BrowserRouter>
  </React.StrictMode>,
)
