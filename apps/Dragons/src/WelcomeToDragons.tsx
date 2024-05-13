import { useState } from 'react'
import reactLogo from '../../Dragons/src/assets/react.svg'
import viteLogo from '/vite.svg'
import '../../Dragons/src/App.css'
import {Link} from "react-router-dom";

function WelcomeToDragons() {
  const [count, setCount] = useState(0)

  return (
      <>
          <div className="bg-amber-400">
              <div>
                  <a href="https://vitejs.dev" target="_blank">
                      <img src={viteLogo} className="logo" alt="Vite logo"/>
                  </a>
                  <a href="https://react.dev" target="_blank">
                      <img src={reactLogo} className="logo react" alt="React logo"/>
                  </a>
              </div>
              <p className="text-3xl font-bold underline">Welcome To Dragons</p>
              <div>
                  <button onClick={() => setCount((count) => count + 1)} className="bg-red-700">
                      count is {count}
                  </button>
              </div>
              <div>
                  <Link to="/" className="bg-red-700">
                      Go to Home
                  </Link>
                  <Link to="/Monsters" className="bg-red-700">
                      Go to Monsters
                  </Link>
              </div>
          </div>
      </>
  )
}

export default WelcomeToDragons
