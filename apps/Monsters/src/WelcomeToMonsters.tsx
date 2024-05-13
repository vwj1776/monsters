import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import {Link} from "react-router-dom";

function WelcomeToMonsters() {
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
            <p className="text-3xl font-bold underline">Welcome To Monsters</p>
            <div>
                <button onClick={() => setCount((count) => count + 1)} className="bg-red-700">
                    count is {count}
                </button>
                <Link to="/Dragons" className="bg-red-700">
                    Go to Dragons
                </Link>
                <Link to="/" className="bg-red-700">
                    Go to Home
                </Link>
            </div>

        </div>
    </>
  )
}


export default WelcomeToMonsters
