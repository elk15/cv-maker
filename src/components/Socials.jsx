import SectionTitle from "./SectionTitle";
import SectionContent from "./SectionContent";
import SectionItem from "./SectionItem";
import { mdiAccountGroup } from '@mdi/js';

export default function Skills({expandId, handleExpandBtn}) {
    return (
        <div className="socials">
            <SectionTitle 
            label={'socials'}
            handleExpandBtn={handleExpandBtn} 
            icon={mdiAccountGroup}/>
            {expandId === 'socials' &&
            <SectionContent 
            btnLabel={'Socials'}
            />
            }
        </div>
    )
}