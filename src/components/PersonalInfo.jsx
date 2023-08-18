import Icon from '@mdi/react';
import { mdiSquareEditOutline } from '@mdi/js';
import '../styles/PersonalInfo.css';


export default function PersonalInfo({editId, setEditId, handleEditBtn}) {
    const handleCancelBtn = () => {
        setEditId('');
    }

    return (
        <div id="personal-info">
            {editId === 'personal-info' ?
                <div className="form">
                <div>
                    <label htmlFor="first-name">First name</label>
                    <input type="text" id='first-name'/>
                </div>
                <div>
                    <label htmlFor="last-name">Last name</label>
                    <input type="text" id='last-name'/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email'/>
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id='phone'/>
                </div>
                <div>
                    <label htmlFor="location">Location</label>
                    <input type="text" id='location'/>
                </div>
                <div>
                    <label htmlFor="website">Personal website(optional)</label>
                    <input type="url" id='website'/>
                </div>
                <div>
                    <label htmlFor="portfolio">Portfolio(optional)</label>
                    <input type="url" id='portfolio'/>
                </div>
                <div className='buttons'>
                    <button className='save-btn'>Save</button> 
                    <button className='calcel-btn' onClick={handleCancelBtn}>Cancel</button>
                </div>
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