// Import necessary modules
// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WelcomeToDragons from "./WelcomeToDragons.tsx";

import { lazy } from "react";

// Define your components


const AllDragonPage = lazy(() => import('./allDragons'));
const EditDragonPage = lazy(() => import('./editDragon'));

// Create your main component
export default function DragonAutoban () {
    return (
            <Routes>
                {/* Routes */}
                <Route path="/" Component={WelcomeToDragons} />
                <Route path="/allDragons/*" element={ < AllDragonPage /> } />
                <Route path="/allDragons/editDragon/*" element={ < EditDragonPage /> } />
            </Routes>
    )
}


