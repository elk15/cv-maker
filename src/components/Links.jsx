import SectionTitle from "./SectionTitle";
import SectionContent from "./SectionContent";
import { mdiAccountGroup } from '@mdi/js';
import { useState } from 'react';
import Buttons from './Buttons';

const initialLinks = {
    github: '',
    linkedin: ''
}

export default function Links({expandId, handleExpandBtn, editId, setEditId, handleEditBtn, person, setPerson}) {
    const [links, setLinks] = useState(initialLinks);

    const handleInputChange = (e) => {
        setLinks({...links, [e.target.id] : e.target.value});
    }

    const handleSaveBtn = () => {
        setPerson({...person, ...links});
        setEditId('');
    }

    return (
        <div className="links">
            {editId === 'links' ?
                <div className="form">
                    <div>
                        <label htmlFor="github">Github link</label>
                        <input type="url" id='github' value={links.github} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="linkedin">LinkedIn link</label>
                        <input type="url" id='linkedin' value={links.linkedin} onChange={handleInputChange}/>
                    </div>
                    <Buttons setEditId={setEditId} handleSaveBtn={handleSaveBtn} setState={setLinks} initialState={links}/>
                </div> 
            :
                <>
                <SectionTitle 
                label={'links'}
                handleExpandBtn={handleExpandBtn} 
                icon ={mdiAccountGroup}/>
                {expandId === 'links' && 
                <SectionContent 
                btnLabel={'Set Links'}
                sectionItems={null}
                handleEditBtn={handleEditBtn}/>}
                </>
            }
        </div>
    )
}