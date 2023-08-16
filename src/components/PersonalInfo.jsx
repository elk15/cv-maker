import Icon from '@mdi/react';
import { mdiSquareEditOutline } from '@mdi/js';
import '../styles/PersonalInfo.css';


export default function PersonalInfo() {
    return (
        <div id="personal-info">
            <div className="title">
                <h2>Personal Info</h2>
                <button id='edit-personal-info-btn' data-id="personal-info">
                    <Icon path={mdiSquareEditOutline} size={1} color="white"/>
                    </button>
            </div>
        </div>
    );
}