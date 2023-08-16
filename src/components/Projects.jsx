import SectionTitle from "./SectionTitle";
import SectionContent from "./SectionContent";
import SectionItem from "./SectionItem";
import { mdiFolderMultiple } from '@mdi/js';

export default function Projects({expandId, handleExpandBtn}) {
    return (
        <div className="projects">
            <SectionTitle 
            label={'projects'}
            handleExpandBtn={handleExpandBtn} 
            icon={mdiFolderMultiple}/>
            {expandId === 'projects' &&
            <SectionContent 
            btnLabel={'Projects'}
            />
            }
        </div>
    )
}