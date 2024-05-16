import './App.css'
import './index.css'
import SubNavigation from "@churchofjesuschrist/eden-sub-navigation";
import WorkforceFooter from "@churchofjesuschrist/eden-workforce-footer";
import Card from "@churchofjesuschrist/eden-card";
import {MonsterType} from "./monsterType.tsx";

function AllMonsters() {
    const monsters: MonsterType[] = [
        {
            name: 'Grendel',
            type: 'Troll',
            powerLevel: 9,
            evilLevel: 10,
            haveIHadANightmareAboutThisMonster: false,
            image: 'https://example.com/grendel.jpg'
        },
        {
            name: 'Grendel\'s Mother',
            type: 'Water Demon',
            powerLevel: 8,
            evilLevel: 9,
            haveIHadANightmareAboutThisMonster: false,
            image: 'https://example.com/grendels-mother.jpg'
        },
        {
            name: 'Bear',
            type: 'Grizzly',
            powerLevel: 10,
            evilLevel: 5,
            haveIHadANightmareAboutThisMonster: true,
            image: 'https://example.com/bear.jpg'
        },
        {
            name: 'Chimera',
            type: 'Hybrid',
            powerLevel: 7,
            evilLevel: 7,
            haveIHadANightmareAboutThisMonster: false,
            image: 'https://example.com/chimera.jpg'
        },
        {
            name: 'Hydra',
            type: 'Multi-headed Serpent',
            powerLevel: 8,
            evilLevel: 8,
            haveIHadANightmareAboutThisMonster: true,
            image: 'https://example.com/hydra.jpg'
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
                                    href: 'http://localhost:5173/Dragons',
                                    text: 'WelcomeToDragons'
                                },
                                {
                                    href: 'http://localhost:5173/Dragons/allDragons',
                                    text: 'DragonsDetailPage'
                                }
                            ],
                            text: 'Dragons'
                        },
                        {
                            items: [
                                {
                                    current: '[Circular]',
                                    href: 'http://localhost:5173/Monsters',
                                    text: 'WelcomeToMonsters'
                                },
                                {
                                    href: 'http://localhost:5173/Monsters/allMonsters',
                                    text: 'MonstersDetailPage'
                                }
                            ],
                            text: 'Monsters'
                        }
                    ]}
                    title={{
                        href: 'http://localhost:5173/',
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
                            <p>haveIHadANightmareAboutThisMonster: {monster.haveIHadANightmareAboutThisMonster ? 'Yes' : 'No'}</p>
                            <img src={monster.image} alt={monster.name} />
                        </Card>
                    ))}
                </div>
                <WorkforceFooter/>
            </div>
        </>
    )
}

export default AllMonsters
