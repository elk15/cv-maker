import '../styles/SectionContent.css';


function SectionBtn({label, handleEditBtn}) {
    const text = label === 'Set Links' ? label : '+  ' + label;
    const id = label === 'Set Links' ? 'links' : label.toLowerCase();
    return (
        <button className="section-btn" onClick={handleEditBtn} data-id={id}>
            {text}
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