// Import necessary modules
// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WelcomeToTamers from "./WelcomeToTamers.tsx";
import { lazy } from "react";

// Define your components


const AllTamersPage = lazy(() => import('./allTamers.tsx'));
const EditTamerPage = lazy(() => import('./editTamer'));


// Create your main component
export default function TamerAutoban () {
    return (
        <Routes>
            {/* Routes */}
            <Route path="/" Component={WelcomeToTamers} />
            <Route path="/allTamers/*" element={ < AllTamersPage /> } />
            <Route path="/allTamers/editTamer/*" element={ < EditTamerPage /> } />

        </Routes>
    )
}


