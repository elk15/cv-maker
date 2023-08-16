import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import '../styles/SectionTitle.css';


export default function SectionTitle({label, icon, handleExpandBtn}) {

    const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1);

    return (
        <div className="title">
                <h2>
                    <Icon path={icon} size={1} />
                    {capitalizedLabel}
                    </h2>
                <button id={`expand-${label}-btn`} data-id={label} onClick={handleExpandBtn}>
                    <Icon path={mdiChevronDown} size={1.3} />
                </button>
        </div>
    )
}