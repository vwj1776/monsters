import {useState} from 'react'
import './App.css'
import './index.css'
import SubNavigation from "@churchofjesuschrist/eden-sub-navigation";
import WorkforceFooter from "@churchofjesuschrist/eden-workforce-footer";

function WelcomeToHome() {
    const [count, setCount] = useState(0);
    return (
        <>
            <SubNavigation
                items={[
                    {
                        href: 'http://localhost:5173/Dragons',
                        text: 'Dragons'
                    },
                    {
                        href: 'http://localhost:5173/Monsters',
                        text: 'Monsters'
                    }
                ]}
                title={{
                    href: 'http://localhost:5173/',
                    text: 'Home App'
                }}
            />
            <div className="bg-amber-400">
                <p className="text-3xl font-bold underline">Welcome To Home</p>
                <div>
                    <button onClick={() => setCount((count) => count + 1)} className="bg-red-700">
                        count is {count}
                    </button>
                </div>
            </div>
            <WorkforceFooter />
        </>
    )
}

export default WelcomeToHome
