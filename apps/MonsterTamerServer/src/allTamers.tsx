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
import {TamerType} from "./tamerType.tsx";
import { Icon } from "@churchofjesuschrist/eden-buttons"
import { Select } from "@churchofjesuschrist/eden-form-parts";

function AllTamers() {

    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    }



    const path = window.location.pathname;

    const [creatures, setCreatures] = useState<any[]>();
    const [tamers, setTamers] = useState<TamerType[]>();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [selectedTamerId, setSelectedTamerId] = useState("all");
    const handleTamerChange = (event) => {
        setSelectedTamerId(event.target.value);
    };

    const filteredTamers = selectedTamerId === "all" ? tamers : tamers.filter(tamer => tamer.monstertamerid === selectedTamerId);
    const filteredCreatures = selectedTamerId === "all" ? creatures : creatures.filter(creature => creature.tamerId === selectedTamerId);

    useEffect(() => {
        const fetchCreatures = async () => {
            try {
                const response = await axios.get('http://localhost:3000/tamers/allMonstersAndDragons');
                setCreatures(response.data);
                setLoading(false);

            } catch (err) {
                setError('Error fetching monsters you dumb dumb');
                setLoading(false);
            }
        };

        fetchCreatures();
    }, []);

    useEffect(() => {
        const fetchTamers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/tamers/allTamers');


                setTamers(response.data);
                setLoading(false);

            } catch (err) {
                setError('Error fetching tamers you dumb dumb');
                setLoading(false);
            }
        };

        fetchTamers();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }



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
                    All Tamers
                    <Select defaultValue="all" onChange={handleTamerChange}>
                        <option value="all">All</option>
                        {tamers?.map(tamer => (
                            <option key={tamer.monstertamerid} value={tamer.monstertamerid}>
                                {tamer.name}
                            </option>
                        ))}
                    </Select>


                    {filteredTamers?.map((tamer, index) => (
                        <Card key={index} depth="raised" className="m-4 p-4">
                            <h1>Tamer Details</h1>
                            <p>Name: {tamer.name}</p>

                            {/* Filter and display creatures (monsters and dragons) */}
                            {filteredCreatures?.filter(creature => creature.tamerId === tamer.monstertamerid)
                                .map((creature, index) => (
                                    <Card key={index} className="m-2 p-2">
                                        <h2>Creature Details</h2>
                                        <p>Name: {creature.name}</p>
                                        <p>ID: {creature.monsterId || creature.dragonId}</p>
                                        <p>Type: {creature.type}</p>
                                    </Card>
                                ))}
                        </Card>
                    ))}


                </div>

                <WorkforceFooter/>
            </div>
        </>
    )
}

export default AllTamers
