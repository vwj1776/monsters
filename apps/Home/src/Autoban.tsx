// Import necessary modules
// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomeToHome from "./WelcomeToHome.tsx";

import { lazy } from "react";
// Define your components
import ModuleFederationWrapper from "../../ModuleFederationWrapper.tsx";

const WelcomeToDragons = lazy(() => import('dragon_app/WelcomeToDragons'));
const WelcomeToMonsters = lazy(() => import('monster_app/WelcomeToMonsters'));
// Create your main component
export default function Autoban () {
    return (
        <BrowserRouter>
            <Routes>
                {/* Routes */}
                <Route path="/" Component={WelcomeToHome} />
                <Route path="/Dragons" element={<ModuleFederationWrapper onError={<div>Failed to load Dragon Routes</div>}>
                    <WelcomeToDragons />
                </ModuleFederationWrapper>} />
                <Route path="/Monsters" element={<ModuleFederationWrapper onError={<div>Failed to load Monster Routes</div>}>
                    <WelcomeToMonsters />
                </ModuleFederationWrapper>} />
            </Routes>
        </BrowserRouter>
    )
}


