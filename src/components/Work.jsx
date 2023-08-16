import SectionTitle from "./SectionTitle";
import { mdiBriefcase } from '@mdi/js';
import SectionContent from "./SectionContent";
import SectionItem from "./SectionItem";

export default function Work({expandId, handleExpandBtn}) {
    return (
        <div className="work">
            <SectionTitle 
            label={'work'}
            handleExpandBtn={handleExpandBtn} 
            icon={mdiBriefcase}/>
            {expandId === 'work' &&
            <SectionContent 
            btnLabel={'Work'}
            sectionItems={<SectionItem title={'Burger Flipper'} subtitle={'Mac Donalds'}/>}
            />
            }
        </div>
    )
}