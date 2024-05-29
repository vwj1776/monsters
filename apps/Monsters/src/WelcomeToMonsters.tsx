import { useState } from 'react'
import './App.css'
import './index.css'
import SubNavigation from "@churchofjesuschrist/eden-sub-navigation";
import WorkforceFooter from "@churchofjesuschrist/eden-workforce-footer";
import { useNavigate } from 'react-router-dom';


function WelcomeToMonsters() {
  const [count, setCount] = useState(0)
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
                              current: '[Circular]',
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
                              current: '[Circular]',
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
                  onClick: () => handleNavigate('/'),
                  text: 'Home App'
              }}
          />
          <div className="bg-amber-400">
              <p className="text-3xl font-bold underline">Welcome To Monsters</p>
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


export default WelcomeToMonsters
