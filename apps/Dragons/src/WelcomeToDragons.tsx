import { useState } from 'react'
import './App.css'
import './index.css'
import SubNavigation from "@churchofjesuschrist/eden-sub-navigation";
import WorkforceFooter from "@churchofjesuschrist/eden-workforce-footer";
import Card from "@churchofjesuschrist/eden-card";
import { DragonType } from "./dragonType.tsx";

function WelcomeToDragons() {
  const dragon0: DragonType = {
      name: 'Puff',
      type: 'Nice :)',
      powerLevel: 3,
      image: 'https://dk.pinterest.com/pin/370632244304904603/'
  }
  return (
      <>
          <div>
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
              <div className="min-h-screen flex flex-col bg-amber-400">
                  <p className="text-3xl font-bold underline">Welcome To Dragons</p>

                  <Card depth="raised">
                      <h1>Dragon Details</h1>
                      <p>Name: {dragon0.name}</p>
                      <p>Type: {dragon0.type}</p>
                      <p>Power Level: {dragon0.powerLevel}</p>
                      <img src={dragon0.image} />
                  </Card>
              </div>

              <WorkforceFooter />
          </div>

      </>
  )
}

export default WelcomeToDragons
