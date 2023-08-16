import '../styles/SectionContent.css';


function SectionBtn({label}) {
    return (
        <button className="section-btn">
            + {label}
            </button>
    )
}

export default function SectionContent({sectionItems, btnLabel}) {
    return (
        <div className="content">
            <ul>
                {sectionItems}
            </ul>
            <SectionBtn label={btnLabel}/>
        </div>
    )
}