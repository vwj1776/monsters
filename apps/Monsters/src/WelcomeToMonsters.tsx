import {useRef, useState} from 'react'
import './App.css'
import './index.css'
import SubNavigation from "@churchofjesuschrist/eden-sub-navigation";
import WorkforceFooter from "@churchofjesuschrist/eden-workforce-footer";
import { useNavigate } from 'react-router-dom';
import { MonsterType } from "monsters/src/monsterType.tsx";
import axios from "axios";
import ToolModal from "@churchofjesuschrist/eden-tool-modal";
import { Form, FormField, Input } from "@churchofjesuschrist/eden-form-parts";
import Row from "@churchofjesuschrist/eden-row";
import { Stack } from "@churchofjesuschrist/eden-tile-parts";
import { Primary, Secondary } from "@churchofjesuschrist/eden-buttons";

function WelcomeToMonsters() {
  const [count, setCount] = useState(0)
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




    function handleAddMonster(e: any) {
        e.preventDefault();


        const formData = new FormData(e.target);
        const monster: MonsterType = {
            name: formData.get('name') as string,
            type: formData.get('type') as string,
            powerLevel: +formData.get('powerLevel'),
            evilLevel: +formData.get('evilLevel'),
            haveIEverHadANightmareAboutThisMonster: !!formData.get('haveIEverHadANightmareAboutThisMonster'),
            image: formData.get('image') as string
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
            setError('Error adding monster you dumb dumb');

        }
    }

  return (
      <>
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
          <div className="bg-amber-400">
              <p className="text-3xl font-bold underline">Welcome To Monsters</p>
              <div>
                  <button onClick={() => setCount((count) => count + 1)} className="bg-red-700">
                      count is {count}
                  </button>

              </div>
          </div>
          <WorkforceFooter />

          <Primary onClick={openModal}>
              Click to Add Monster
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
                  onSubmit={(e: any) => handleAddMonster(e)}
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
                      <FormField label="Evil Level">
                          <Input
                              name="evilLevel"
                              required
                          />
                      </FormField>
                      <FormField label="haveIEverHadANightmareAboutThisMonster">
                          <Input
                              name="haveIEverHadANightmareAboutThisMonster"
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


export default WelcomeToMonsters
