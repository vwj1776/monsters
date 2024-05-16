import { useState } from 'react'
import './App.css'
import './index.css'
import SubNavigation from "@churchofjesuschrist/eden-sub-navigation";
import WorkforceFooter from "@churchofjesuschrist/eden-workforce-footer";


function WelcomeToMonsters() {
  const [count, setCount] = useState(0)



  return (
      <>
          <SubNavigation
              items={[
                  {
                      items: [
                          {
                              current: '[Circular]',
                              href: 'http://localhost:5173/Dragons',
                              text: 'WelcomeToDragons'
                          },
                          {
                              href: 'http://localhost:5173/Dragons/allDragons',
                              text: 'DragonsDetailPage'
                          }
                      ],
                      text: 'Dragons'
                  },
                  {
                      items: [
                          {
                              current: '[Circular]',
                              href: 'http://localhost:5173/Monsters',
                              text: 'WelcomeToMonsters'
                          },
                          {
                              href: 'http://localhost:5173/Monsters/allMonsters',
                              text: 'MonstersDetailPage'
                          }
                      ],
                      text: 'Monsters'
                  }
              ]}
              title={{
                  href: 'http://localhost:5173/',
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
