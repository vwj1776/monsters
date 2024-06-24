import './App.css'
import './index.css'
import SubNavigation from "@churchofjesuschrist/eden-sub-navigation";
import WorkforceFooter from "@churchofjesuschrist/eden-workforce-footer";
import Card from "@churchofjesuschrist/eden-card";
import {MonsterType} from "./monsterType.tsx";
import { Primary, Secondary } from "@churchofjesuschrist/eden-buttons";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import React, {useEffect, useRef, useState} from "react";
import ToolModal from "@churchofjesuschrist/eden-tool-modal";
import { Form, FormField, Input } from "@churchofjesuschrist/eden-form-parts";
import Row from "@churchofjesuschrist/eden-row";
import { Stack } from "@churchofjesuschrist/eden-tile-parts";
function EditMonster() {
    const navigate = useNavigate();
    const [currentMonster, setMonster] = useState<MonsterType>(useLocation().state);

    const handleNavigate = (path) => {
        navigate(path);
    }

    const path = window.location.pathname;


    console.log('testing current Monster', currentMonster);
    const [open, setOpen] = useState(false); // Initialize state for the modal
    const refReference = useRef(null); // Initialize ref for the form
    const [error, setError] = useState<string | null>(null);

    const openModal = () => setOpen(true); // Function to open the modal
    const closeModal = () => {
        if (refReference.current) refReference.current.reset(); // Reset the form
        setOpen(false); // Close the modal
    };

    function handleAddMonster(e: any) {
        e.preventDefault();


        const formData = new FormData(e.target);
        const monster: MonsterType = {
            name: formData.get('name') as string,
            type: formData.get('type') as string,
            powerLevel: +formData.get('powerLevel'),
            evilLevel: +formData.get('evilLevel'),
            haveIEverHadANightmareAboutThisMonster: !!formData.get('haveIEverHadANightmareAboutThisMonster'),
            image: formData.get('image') as string,
            monsterId: currentMonster.monsterId
        };
        // if (eventId) {
        //     data.eventId = eventId;
        // }

        upsertMonster(monster);
        closeModal();
    }

    async function upsertMonster(monster: MonsterType) {
        try {
            await axios({
                method: 'post',
                url: '/monsters/api/post',
                baseURL: 'http://localhost:3000',
                data: monster
            }).catch((e) => console.log(e))



        } catch (err) {
            setError('Error adding Monsters you dumb dumb');

        }
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
                    <Card depth="raised" className="m-4 p-4">
                        <h1>Monster Details</h1>
                        <p>Name: {currentMonster.name}</p>
                        <p>Type: {currentMonster.type}</p>
                        <p>Power Level: {currentMonster.powerLevel}</p>
                        <img src={currentMonster.image} alt={currentMonster.name}/>
                    </Card>
                </div>

                <WorkforceFooter/>
            </div>

            <Primary onClick={openModal}>
                Click to Edit Monster
            </Primary>
            <ToolModal open={open}
                       footer={<Row><Primary form=":r0:" type="submit">Submit</Primary><Secondary onClick={function(){refReference.current.reset(),setOpen(!1)}}>Cancel</Secondary></Row>}
                       header="Edit Monster"
                       onClose={closeModal}
            >
                <Form
                    ref={refReference}
                    id=":r0:"
                    method="dialog"
                    onSubmit={(e: any) => handleAddMonster(e)}
                >
                    <Stack>
                        <FormField label="Name">
                            <Input
                                autofocus="true"
                                name="name"
                                required
                                defaultValue={currentMonster?.name}
                            />
                        </FormField>
                        <FormField label="Type">
                            <Input
                                name="type"
                                required
                                defaultValue={currentMonster?.type}
                            />
                        </FormField>
                        <FormField label="Power Level">
                            <Input
                                name="powerLevel"
                                required
                                defaultValue={currentMonster?.powerLevel}
                            />
                        </FormField>
                        <FormField label="Evil Lavel">
                            <Input
                                name="evilLevel"
                                required
                                defaultValue={currentMonster?.evilLevel}
                            />
                        </FormField>
                        <FormField label="haveIEverHadANightmareAboutThisMonster">
                            <Input
                                name="haveIEverHadANightmareAboutThisMonster"
                                required
                                defaultValue={currentMonster?.haveIEverHadANightmareAboutThisMonster}
                            />
                        </FormField>
                        <FormField label="Image">
                            <Input
                                name="Image"
                                defaultValue={currentMonster?.image}
                            />
                        </FormField>
                    </Stack>
                </Form>
            </ToolModal>
        </>
    )
}

export default EditMonster
