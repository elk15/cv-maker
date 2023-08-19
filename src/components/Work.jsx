import SectionTitle from "./SectionTitle";
import { mdiBriefcase } from '@mdi/js';
import SectionContent from "./SectionContent";
import SectionItem from "./SectionItem";
import { useState } from 'react';
import Buttons from './Buttons';
import { v4 as uuidv4 } from 'uuid';

const initialWork = {
    id: '',
    title: '',
    employer: '',
    startYear: '',
    endYear: ''
}

export default function Work({expandId, handleExpandBtn, editId, setEditId, handleEditBtn, person, setPerson}) {
    const [work, setWork] = useState(initialWork);

    const handleInputChange = (e) => {
        setWork({...work, [e.target.id] : e.target.value});
    }

    const handleSaveBtn = () => {
        const isFilled = work.title !== '' && work.employer !== '' && work.startYear !== '';
        if (isFilled) {
            work.id = uuidv4();
            setPerson({...person, work: [...person.work, work]});
            setEditId('');
            setWork(initialWork);
        }
    }

    const handleDeleteItemBtn = (id) => {
        const newWork = person.work.filter((item) => item.id !== id);
        setPerson({...person, work : newWork})
    }

    const sectionItems = person.work.map(item=> <SectionItem key={item.id} 
        title={item.title} 
        subtitle={item.employer}
        id={item.id} 
        handleDeleteItemBtn={handleDeleteItemBtn}/>);


    return (
        <div className="work">
            {editId === 'work' ?
                <div className="form">
                    <div>
                        <label htmlFor="title">Job title</label>
                        <input type="text" id='title' onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="employer">Employer</label>
                        <input type="text" id='employer' onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="startYear">Start Year</label>
                        <input type="text" id='startYear' onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="endYear">End Year(optional)</label>
                        <input type="text" id='endYear' onChange={handleInputChange}/>
                    </div>
                    <Buttons setEditId={setEditId} handleSaveBtn={handleSaveBtn} setState={setWork} initialState={initialWork}/>
                </div> 
            :
                <>
                <SectionTitle 
                label={'work'}
                handleExpandBtn={handleExpandBtn} 
                icon={mdiBriefcase}/>
                {expandId === 'work' &&
                <SectionContent 
                btnLabel={'Work'}
                sectionItems={sectionItems}
                handleEditBtn={handleEditBtn}/>}
                </>
            }
        </div>
    )
}