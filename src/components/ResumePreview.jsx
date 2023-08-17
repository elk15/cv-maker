import '../styles/ResumePreview.css';
import Icon from '@mdi/react';
import { mdiEmailFastOutline } from '@mdi/js';
import { mdiPhoneInTalkOutline } from '@mdi/js';
import { mdiMapMarker } from '@mdi/js';
import { mdiLinkVariant } from '@mdi/js';

function ResumePreview() {
    return (
        <>
            <div className="col-1">
                <div>
                    <h3>PERSONAL INFO</h3>
                    <hr/>
                    <div id='preview-personal' className='preview-section'>
                        <p id='preview-email'><Icon path={mdiEmailFastOutline} size={1} color="white"/> test@mail.com</p>
                        <p id='preview-phone'><Icon path={mdiPhoneInTalkOutline} size={1} color="white"/> 69704093405</p>
                        <p id='preview-location'><Icon path={mdiMapMarker} size={1} color="white"/> Chalkis, Greece</p>
                        <a href="http://" target="_blank"><Icon path={mdiLinkVariant} size={1} color="white"/>Personal website</a>
                        <a href="http://" target="_blank"><Icon path={mdiLinkVariant} size={1} color="white"/>Portfolio</a>
                    </div>
                </div>
                <div>
                    <h3>SKILLS</h3>
                    <hr/>
                </div>
                <div>
                    <h3>CERTIFICATES</h3>
                    <hr/>
                </div>
                <div>
                    <h3>SOCIALS</h3>
                    <hr/>
                </div>
            </div>
            <div className="col-2">
                <div>
                    <h1 id='preview-name'>ELINA <span>PAPADIMITRIOU</span></h1>
                    <h2 id='preview-role'>Full Stack Developer</h2>
                </div>
                <div>
                    <h3>EDUCATION</h3>
                    <hr/>
                </div>
                <div>
                    <h3>WORK EXPERIENCE</h3>
                    <hr/>
                </div>
                <div>
                    <h3>PROJECTS</h3>
                    <hr/>
                </div>
            </div>
        </>
    )
}

export default ResumePreview