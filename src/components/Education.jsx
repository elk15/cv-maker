import { mdiSchool } from '@mdi/js';
import '../styles/Education.css';
import SectionTitle from './SectionTitle';
import SectionContent from "./SectionContent";
import SectionItem from "./SectionItem";


export default function Education({expandId, handleExpandBtn}) {
    return (
        <div id="education">
            <SectionTitle 
            label={'education'}
            handleExpandBtn={handleExpandBtn} 
            icon ={mdiSchool}/>
            {expandId === 'education' &&
            <SectionContent 
            btnLabel={'Education'}
            sectionItems={<SectionItem title={'Bachelor of Philosophy'} subtitle={'University of London'}/>}/>
            }        
        </div>
    )
}