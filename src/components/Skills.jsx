import SectionTitle from "./SectionTitle";
import SectionContent from "./SectionContent";
import SectionItem from "./SectionItem";
import { mdiBrain } from '@mdi/js';

export default function Skills({expandId, handleExpandBtn}) {
    return (
        <div className="skills">
            <SectionTitle 
            label={'skills'}
            handleExpandBtn={handleExpandBtn} 
            icon={mdiBrain}/>
            {expandId === 'skills' &&
            <SectionContent 
            btnLabel={'Skills'}
            />
            }
        </div>
    )
}