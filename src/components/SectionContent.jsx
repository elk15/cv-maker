import '../styles/SectionContent.css';


function SectionBtn({label, handleEditBtn}) {
    return (
        <button className="section-btn" onClick={handleEditBtn} data-id={label.toLowerCase()}>
            + {label}
            </button>
    )
}

export default function SectionContent({sectionItems, btnLabel, handleEditBtn}) {
    return (
        <div className="content">
            <ul>
                {sectionItems}
            </ul>
            <SectionBtn label={btnLabel} handleEditBtn={handleEditBtn}/>
        </div>
    )
}