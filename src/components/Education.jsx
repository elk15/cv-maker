import { mdiSchool } from '@mdi/js';
import '../styles/Education.css';
import SectionTitle from './SectionTitle';
import SectionContent from "./SectionContent";
import SectionItem from "./SectionItem";
import { useState } from 'react';
import Buttons from './Buttons';
import { v4 as uuidv4 } from 'uuid';

const initialEducation = {
    id: '',
    degree: '',
    university: '',
    startYear: '',
    endYear: '',
}


export default function Education({expandId, handleExpandBtn, editId, setEditId, handleEditBtn, person, setPerson}) {
    const [education, setEducation] = useState(initialEducation);

    const handleInputChange = (e) => {
        setEducation({...education, [e.target.id] : e.target.value});
    }

    const handleSaveBtn = () => {
        const isFilled = education.degree !== '' && education.university !== '' && education.startYear !== '';
        if (isFilled) {
            if(education.id === '') {
                education.id = uuidv4();
                setPerson({...person, education: [...person.education, education]});
            } else {
                let newEducation = person.education.filter((item) => item.id !== education.id);
                newEducation = [...newEducation, education];
                setPerson({...person, education : newEducation});
            }
            setEditId('');
            setEducation(initialEducation);
        }
    }

    const handleDeleteItemBtn = (id) => {
        const newEducation = person.education.filter((item) => item.id !== id);
        setPerson({...person, education : newEducation});
    }

    const handleEditItemBtn = (id) => {
        const item = person.education.find((item) => item.id === id);
        setEducation(item);
        setEditId('education');
    }

    const sectionItems = person.education.map(item=> <SectionItem key={item.id} 
        title={item.degree} 
        subtitle={item.university} 
        id={item.id} 
        handleDeleteItemBtn={handleDeleteItemBtn}
        handleEditItemBtn={handleEditItemBtn}/>);

    return (
        <div id="education">
            
            {editId === 'education' ?
                <div className="form">
                    <div>
                        <label htmlFor="degree">Degree</label>
                        <input type="text" id='degree' value={education.degree} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="university">University</label>
                        <input type="text" id='university' value={education.university} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="startYear">Start Year</label>
                        <input type="text" id='startYear' value={education.startYear} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="endYear">End Year(optional)</label>
                        <input type="text" id='endYear' value={education.endYear} onChange={handleInputChange}/>
                    </div>
                    <Buttons setEditId={setEditId} handleSaveBtn={handleSaveBtn} setState={setEducation} initialState={initialEducation}/>
                </div> 
            :
                <>
                <SectionTitle 
                label={'education'}
                handleExpandBtn={handleExpandBtn} 
                icon ={mdiSchool}/>
                {expandId === 'education' && 
                <SectionContent 
                btnLabel={'Education'}
                sectionItems={sectionItems}
                handleEditBtn={handleEditBtn}/>}
                </>
            }
                   
        </div>
    )
}