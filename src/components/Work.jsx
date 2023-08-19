import SectionTitle from "./SectionTitle";
import { mdiBriefcase } from '@mdi/js';
import SectionContent from "./SectionContent";
import SectionItem from "./SectionItem";
import { useState } from 'react';
import Buttons from './Buttons';


export default function Work({expandId, handleExpandBtn, editId, setEditId, handleEditBtn, person, setPerson}) {
    const [work, setWork] = useState({});

    const handleInputChange = (e) => {
        setWork({...work, [e.target.id] : e.target.value});
    }

    const handleSaveBtn = () => {
        setPerson({...person, work: [...person.work, work]});
        setEditId('');
        setWork({});
    }

    const sectionItems = person.education.map(item=> <SectionItem key={item.title} title={item.title} subtitle={item.employer}/>);


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
                    <Buttons setEditId={setEditId} handleSaveBtn={handleSaveBtn} setState={setWork}/>
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