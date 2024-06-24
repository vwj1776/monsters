import './App.css'
import './index.css'
import SubNavigation from "@churchofjesuschrist/eden-sub-navigation";
import WorkforceFooter from "@churchofjesuschrist/eden-workforce-footer";
import Card from "@churchofjesuschrist/eden-card";
import {DragonType} from "./dragonType.tsx";
import { Primary } from "@churchofjesuschrist/eden-buttons";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import React,  {useEffect, useState} from "react";

function AllDragons() {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    }

    const path = window.location.pathname;

    const [dragons, setDragons] = useState<DragonType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
    const fetchDragons = async () => {
        try {
            const response = await axios.get('http://localhost:3000/dragons/all');
            console.log('response', response);

            console.log('response.data', response.data );
            setDragons(response.data);
            setLoading(false);

        } catch (err) {
            setError('Error fetching dragons you dumb dumb');
            setLoading(false);
        }
    };

    fetchDragons();
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
                {dragons.map((dragon, index) => (
                    <Card key={index} depth="raised" className="m-4 p-4">
                        <h1>Dragon Details</h1>
                        <p>Name: {dragon.name}</p>
                        <p>Type: {dragon.type}</p>
                        <p>Power Level: {dragon.powerLevel}</p>
                        <img src={dragon.image} alt={dragon.name}/>

                        <Link to={`${path}/editDragon`} state={dragon}>
                            <Primary>View/Edit Drgaon</Primary>
                        </Link>

                    </Card>
                ))}


            </div>

            <WorkforceFooter/>
        </div>
    </>
)
}

export default AllDragons
