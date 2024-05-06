// Import necessary modules
// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomeToHome from "./WelcomeToHome.tsx";
import WelcomeToDragons from "./WelcomeToDragons.tsx";
import WelcomeToMonsters from "./WelcomeToMonsters.tsx";

// Define your components


// Create your main component
export default function Autoban () {
    return (
        <BrowserRouter>
            <Routes>
                {/* Routes */}
                <Route path="/" Component={WelcomeToHome} />
                <Route path="/Dragons" Component={WelcomeToDragons} />
                <Route path="/Monsters" Component={WelcomeToMonsters} />
            </Routes>
        </BrowserRouter>
    )
}


