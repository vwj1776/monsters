import { useState, useRef } from 'react'
import './App.css'
import './index.css'
import SubNavigation from "@churchofjesuschrist/eden-sub-navigation";
import WorkforceFooter from "@churchofjesuschrist/eden-workforce-footer";
import Card from "@churchofjesuschrist/eden-card";
import { DragonType } from "./dragonType.tsx";
import { Primary, Secondary } from "@churchofjesuschrist/eden-buttons";
import { useNavigate } from 'react-router-dom';
import ToolModal from "@churchofjesuschrist/eden-tool-modal";
import { Form, FormField, Input } from "@churchofjesuschrist/eden-form-parts";
import Row from "@churchofjesuschrist/eden-row";
import { Stack } from "@churchofjesuschrist/eden-tile-parts";
import axios from "axios";
function WelcomeToDragons() {

    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    }

    const [open, setOpen] = useState(false); // Initialize state for the modal
    const refReference = useRef(null); // Initialize ref for the form
    const [error, setError] = useState<string | null>(null);

    const openModal = () => setOpen(true); // Function to open the modal
    const closeModal = () => {
        if (refReference.current) refReference.current.reset(); // Reset the form
        setOpen(false); // Close the modal
    };




    function handleAddDragon(e: any) {
        e.preventDefault();


        const formData = new FormData(e.target);
        const dragon: DragonType = {
            name: formData.get('name') as string,
            type: formData.get('type') as string,
            powerLevel: formData.get('powerLevel') as number,
            image: formData.get('image') as string
        };
        // if (eventId) {
        //     data.eventId = eventId;
        // }

        upsertDragon(dragon);
        closeModal();
    }

    async function upsertDragon(dragon: DragonType) {
        try {
            await axios({
                method: 'post',
                url: '/dragons/api/post',
                baseURL: 'http://localhost:3000',
                data: dragon
            }).catch((e) => console.log(e))



        } catch (err) {
            setError('Error adding dragons you dumb dumb');

        }
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
                    <p className="text-3xl font-bold underline">Welcome To Dragons</p>
                </div>
                <WorkforceFooter />
            </div>

            {/**/}
            <Primary onClick={openModal}>
                Click to Add Dragon
            </Primary>
            <ToolModal open={open}
                footer={<Row><Primary form=":r0:" type="submit">Submit</Primary><Secondary onClick={function(){refReference.current.reset(),setOpen(!1)}}>Cancel</Secondary></Row>}
                header="New Dragon"
                onClose={closeModal}
            >
                <Form
                    ref={refReference}
                    id=":r0:"
                    method="dialog"
                    onSubmit={(e: any) => handleAddDragon(e)}
                >
                    <Stack>
                        <FormField label="Name">
                            <Input
                                autofocus="true"
                                name="name"
                                required
                            />
                        </FormField>
                        <FormField label="Type">
                            <Input
                                name="type"
                                required
                            />
                        </FormField>
                        <FormField label="Power Level">
                            <Input
                                name="powerLevel"
                                required
                            />
                        </FormField>
                        <FormField label="Image">
                            <Input
                                name="Image"
                            />
                        </FormField>
                    </Stack>
                </Form>
            </ToolModal>
        </>
    )
}

export default WelcomeToDragons
