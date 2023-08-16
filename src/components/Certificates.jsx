import SectionTitle from "./SectionTitle";
import SectionContent from "./SectionContent";
import SectionItem from "./SectionItem";
import { mdiFileCertificate } from '@mdi/js';

export default function Skills({expandId, handleExpandBtn}) {
    return (
        <div className="certificates">
            <SectionTitle 
            label={'certificates'}
            handleExpandBtn={handleExpandBtn} 
            icon={mdiFileCertificate}/>
            {expandId === 'certificates' &&
            <SectionContent 
            btnLabel={'Certificates'}
            />
            }
        </div>
    )
}