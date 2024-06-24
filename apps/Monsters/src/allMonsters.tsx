import './App.css'
import './index.css'
import SubNavigation from "@churchofjesuschrist/eden-sub-navigation";
import WorkforceFooter from "@churchofjesuschrist/eden-workforce-footer";
import Card from "@churchofjesuschrist/eden-card";
import {MonsterType} from "./monsterType.tsx";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import { Primary } from "@churchofjesuschrist/eden-buttons";



function AllMonsters() {

    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    }

    const path = window.location.pathname;

    const [monsters, setMonsters] = useState<MonsterType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMonsters = async () => {
            try {
                const response = await axios.get('http://localhost:3000/monsters/all');
                console.log('response', response);

                console.log('response.data', response.data );
                setMonsters(response.data);
                setLoading(false);

            } catch (err) {
                setError('Error fetching monsters you dumb dumb');
                setLoading(false);
            }
        };

        fetchMonsters();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }


    console.log(monsters); // Safely access
    return (
        <>
            <div>
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
                <div className="min-h-screen flex flex-col bg-amber-400">
                    {monsters.map((monster, index) => (
                        <Card key={index} depth="raised" className="m-4 p-4">
                            <h1>Monster Details</h1>
                            <p>Name: {monster.name}</p>
                            <p>Type: {monster.type}</p>
                            <p>Power Level: {monster.powerLevel}</p>
                            <p>Evil Level: {monster.evilLevel}</p>
                            <p>haveIHadANightmareAboutThisMonster: {monster.haveIEverHadANightmareAboutThisMonster ? 'Yes' : 'No'}</p>
                            <img src={monster.image} alt={monster.name} />
                            <Link to={`${path}/editMonster`} state={monster}>
                                <Primary>View/Edit Monster</Primary>
                            </Link>
                        </Card>
                    ))}
                </div>
                <WorkforceFooter/>
            </div>
        </>
    )
}

export default AllMonsters
