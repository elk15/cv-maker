import Icon from '@mdi/react';
import { mdiSquareEditOutline } from '@mdi/js';
import '../styles/PersonalInfo.css';
import { useState } from 'react';
import Buttons from './Buttons';


export default function PersonalInfo({editId, setEditId, handleEditBtn, person, setPerson}) {
    const [personalInfo, setPersonalInfo] = useState({});

    const handleInputChange = (e) => {
        setPersonalInfo({...personalInfo, [e.target.id] : e.target.value});
    }

    const handleSaveBtn = () => {
        setPerson({...person, ...personalInfo});
        setEditId('');
        setPersonalInfo({});
    }

    return (
        <div id="personal-info">
            {editId === 'personal-info' ?
            <div className="form">
                <div>
                    <label htmlFor="firstName">First name</label>
                    <input type="text" id='firstName' onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" id='lastName' onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="role">Job title</label>
                    <input type="text" id='role' onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id='phone' onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="location">Location</label>
                    <input type="text" id='location' onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="website">Personal website(optional)</label>
                    <input type="url" id='website' onChange={handleInputChange} placeholder="Enter a url"/>
                </div>
                <div>
                    <label htmlFor="portfolio">Portfolio(optional)</label>
                    <input type="url" id='portfolio' onChange={handleInputChange} placeholder="Enter a url"/>
                </div>
                <Buttons setEditId={setEditId} handleSaveBtn={handleSaveBtn} setState={setPersonalInfo}/>
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