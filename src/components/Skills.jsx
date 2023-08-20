import SectionTitle from "./SectionTitle";
import SectionContent from "./SectionContent";
import SectionItem from "./SectionItem";
import { mdiBrain } from '@mdi/js';
import { useState } from 'react';
import Buttons from './Buttons';
import { v4 as uuidv4 } from 'uuid';

const initialSkill = {
    id: '',
    title: '',
    items: []
}

export default function Skills({expandId, handleExpandBtn, editId, setEditId, handleEditBtn, person, setPerson}) {
    const [skill, setSkill] = useState(initialSkill);

    const handleInputChange = (e) => {
        setSkill({...skill, [e.target.id] : e.target.value});
    }

    const handleSkillsInputChange = (e) => {
        setSkill({...skill, [e.target.id] : e.target.value.split(',')});
    }

    const handleSaveBtn = () => {
        const isFilled = skill.title !== '' && skill.items.length > 0;
        if (isFilled) {
            if(skill.id === '') {
                skill.id = uuidv4();
                setPerson({...person, skills: [...person.skills, skill]});
            } else {
                const editedSkills = person.skills.map((item) => {
                    if (item.id === skill.id) {
                        item = {...skill};
                    }
                    return item;
                });
                console.log(editedSkills);
                setPerson({...person, skills : editedSkills});
            }
            setEditId('');
            setSkill(initialSkill);
        }
    }

    const handleDeleteItemBtn = (id) => {
        const newSkills = person.skills.filter((item) => item.id !== id);
        setPerson({...person, skills : newSkills});
    }

    const handleEditItemBtn = (id) => {
        const item = person.skills.find((item) => item.id === id);
        setSkill(item);
        setEditId('skills');
    }

    const sectionItems = person.skills.map(item=> <SectionItem key={item.id} 
        title={item.title} 
        id={item.id} 
        handleDeleteItemBtn={handleDeleteItemBtn}
        handleEditItemBtn={handleEditItemBtn}/>);
    

    return (
        <div className="skills">
            {editId === 'skills' ?
                <div className="form">
                    <div>
                        <label htmlFor="title">Title of skill set</label>
                        <input type="text" id='title' value={skill.title} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="items">Enter skills</label>
                        <textarea name="items" id="items" cols="30" rows="5"
                        value={skill.items}
                        onChange={handleSkillsInputChange} 
                        maxLength="120"
                        placeholder="Skills must be separated by coma. For example: html,css,javasript">
                        </textarea>
                    </div>
                    <Buttons setEditId={setEditId} handleSaveBtn={handleSaveBtn} setState={setSkill} initialState={initialSkill}/>
                </div> 
            :
                <>
                <SectionTitle 
                label={'skills'}
                handleExpandBtn={handleExpandBtn} 
                icon ={mdiBrain}/>
                {expandId === 'skills' && 
                <SectionContent 
                btnLabel={'Skills'}
                sectionItems={sectionItems}
                handleEditBtn={handleEditBtn}/>}
                </>
            }
        </div>
    )
}