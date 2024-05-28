import './App.css'
import './index.css'
import SubNavigation from "@churchofjesuschrist/eden-sub-navigation";
import WorkforceFooter from "@churchofjesuschrist/eden-workforce-footer";
import Card from "@churchofjesuschrist/eden-card";
import {DragonType} from "./dragonType.tsx";
import { ArrowBack } from "@churchofjesuschrist/eden-icons";
import { Primary } from "@churchofjesuschrist/eden-buttons";

function AllDragons() {
    const dragons: DragonType[] = [
        {
            name: 'Puff',
            type: 'Nice :)',
            powerLevel: 3,
            image: 'https://dk.pinterest.com/pin/370632244304904603/'
        },
        {
            name: 'Smaug',
            type: 'Fire',
            powerLevel: 10,
            image: 'https://example.com/smaug.jpg'
        },
        {
            name: 'Draco',
            type: 'Ice',
            powerLevel: 7,
            image: 'https://example.com/draco.jpg'
        },
        {
            name: 'Toothless',
            type: 'Night Fury',
            powerLevel: 8,
            image: 'https://example.com/toothless.jpg'
        },
        {
            name: 'Falkor',
            type: 'Luckdragon',
            powerLevel: 5,
            image: 'https://example.com/falkor.jpg'
        }
    ];
    return (
        <>
            <div>
                <SubNavigation
                    items={[
                        {
                            items: [
                                {
                                    current: '[Circular]',
                                    href: 'http://localhost:5174/Dragons',
                                    text: 'WelcomeToDragons'
                                },
                                {
                                    href: 'http://localhost:5174/Dragons/allDragons',
                                    text: 'DragonsDetailPage'
                                }
                            ],
                            text: 'Dragons'
                        },
                        {
                            items: [
                                {
                                    current: '[Circular]',
                                    href: 'http://localhost:5174/Monsters',
                                    text: 'WelcomeToMonsters'
                                },
                                {
                                    href: 'http://localhost:5174/Monsters/allMonsters',
                                    text: 'MonstersDetailPage'
                                }
                            ],
                            text: 'Monsters'
                        }
                    ]}
                    title={{
                        href: 'http://localhost:5174/',
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
                        </Card>
                    ))}

                    <Primary
                        href={{
                            href: 'http://localhost:5173/Dragons'
                        }}
                    >
                        <ArrowBack />
                        Button text
                    </Primary>
                </div>

                <WorkforceFooter/>
            </div>
        </>
    )
}

export default AllDragons
