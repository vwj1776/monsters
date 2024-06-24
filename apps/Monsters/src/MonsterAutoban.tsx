// Import necessary modules
// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WelcomeToMonsters from "./WelcomeToMonsters.tsx";
import { lazy } from "react";

// Define your components


const AllMonsterPage = lazy(() => import('./allMonsters'));
const EditMonsterPage = lazy(() => import('./editMonster'));


// Create your main component
export default function MonsterAutoban () {
    return (
        <Routes>
            {/* Routes */}
            <Route path="/" Component={WelcomeToMonsters} />
            <Route path="/allMonsters/*" element={ < AllMonsterPage /> } />
            <Route path="/allMonsters/editMonster/*" element={ < EditMonsterPage /> } />

        </Routes>
    )
}


