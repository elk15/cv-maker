import { mdiSchool } from '@mdi/js';
import '../styles/Education.css';
import SectionTitle from './SectionTitle';
import SectionContent from "./SectionContent";
import SectionItem from "./SectionItem";
import { useState } from 'react';
import Buttons from './Buttons';


export default function Education({expandId, handleExpandBtn, editId, setEditId, handleEditBtn, person, setPerson}) {
    const [education, setEducation] = useState({});

    const handleInputChange = (e) => {
        setEducation({...education, [e.target.id] : e.target.value});
    }

    const handleSaveBtn = () => {
        setPerson({...person, education: [...person.education, education]});
        setEditId('');
        setEducation({});
    }

    const sectionItems = person.education.map(item=> <SectionItem key={item.degree} title={item.degree} subtitle={item.university}/>);

    return (
        <div id="education">
            
            {editId === 'education' ?
                <div className="form">
                    <div>
                        <label htmlFor="degree">Degree</label>
                        <input type="text" id='degree' onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="university">University</label>
                        <input type="text" id='university' onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="startYear">Start Year</label>
                        <input type="text" id='startYear' onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="endYear">End Year(optional)</label>
                        <input type="text" id='endYear' onChange={handleInputChange}/>
                    </div>
                    <Buttons setEditId={setEditId} handleSaveBtn={handleSaveBtn} setState={setEducation}/>
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