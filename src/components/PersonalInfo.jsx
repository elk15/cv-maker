import Icon from '@mdi/react';
import { mdiSquareEditOutline } from '@mdi/js';
import '../styles/PersonalInfo.css';
import { useState } from 'react';
import Buttons from './Buttons';

const initialPerson = {
    firstName: '',
    lastName: '',
    role: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    portfolio: ''
}


export default function PersonalInfo({editId, setEditId, handleEditBtn, person, setPerson}) {
    const fillInitialInfo = () => {
        Object.keys(initialPerson).forEach((key) => {
            initialPerson[key] = person[key];
        })
        return initialPerson;
    }
    const [personalInfo, setPersonalInfo] = useState(fillInitialInfo());

    const handleInputChange = (e) => {
        setPersonalInfo({...personalInfo, [e.target.id] : e.target.value});
    }

    const handleSaveBtn = () => {
        const isFilled = personalInfo.firstName !== '' && personalInfo.lastName !== '' 
        && personalInfo.role !== '' && personalInfo.email !== '' && personalInfo.phone !== ''
        && personalInfo.location !== '';
        if (isFilled) {
            setPerson({...person, ...personalInfo});
            setEditId('');
            setPersonalInfo(fillInitialInfo());
        }
        
    }

    return (
        <div id="personal-info">
            {editId === 'personal-info' ?
            <div className="form">
                <div>
                    <label htmlFor="firstName">First name</label>
                    <input type="text" id='firstName' value={personalInfo.firstName} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" id='lastName' value={personalInfo.lastName} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="role">Job title</label>
                    <input type="text" id='role' value={personalInfo.role} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' value={personalInfo.email} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id='phone' value={personalInfo.phone} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="location">Location</label>
                    <input type="text" id='location' value={personalInfo.location} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="website">Personal website(optional)</label>
                    <input type="url" id='website' value={personalInfo.website} onChange={handleInputChange} placeholder="Enter a url"/>
                </div>
                <div>
                    <label htmlFor="portfolio">Portfolio(optional)</label>
                    <input type="url" id='portfolio' value={personalInfo.portfolio} onChange={handleInputChange} placeholder="Enter a url"/>
                </div>
                <Buttons setEditId={setEditId} handleSaveBtn={handleSaveBtn} setState={setPersonalInfo} initialState={fillInitialInfo()}/>
            </div>
                :
                <div className="title">
                <h2>Personal Info</h2>
                <button id='edit-personal-info-btn' data-id="personal-info" onClick={handleEditBtn}>
                    <Icon path={mdiSquareEditOutline} size={1} color="white"/>
                    </button>
                </div>
            }        
        </div>
    );
}