import {useState} from 'react'
import './App.css'
import './index.css'
import SubNavigation from "@churchofjesuschrist/eden-sub-navigation";
import WorkforceFooter from "@churchofjesuschrist/eden-workforce-footer";
import { useLocation, useNavigate } from 'react-router-dom';
function WelcomeToHome() {
    const [count, setCount] = useState(0);

    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    }
    return (
        <>
            <SubNavigation
                items={[
                    {
                        items: [
                            {
                                current: location.pathname ==='/Dragons',
                                onClick: () => handleNavigate('/Dragons'),
                                text: 'WelcomeToDragons'
                            },
                            {
                                onClick: () => handleNavigate('/Dragons/allDragons'),
                                text: 'DragonsDetailPage'
                            }
                        ],
                        text: 'Dragons'
                    },
                    {
                        items: [
                            {
                                current: location.pathname ==='/Monsters',
                                onClick: () => handleNavigate('/Monsters'),
                                text: 'WelcomeToMonsters'
                            },
                            {
                                onClick: () => handleNavigate('/Monsters/allMonsters'),
                                text: 'MonstersDetailPage'
                            }
                        ],
                        text: 'Monsters'
                    }
                ]}
                title={{
                    href: 'http://localhost:5174/',
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
