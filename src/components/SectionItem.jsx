import '../styles/SectionItem.css';

export default function SectionItem({title, subtitle = '', id, handleDeleteItemBtn}) {
    const handleDeleteBtn = () => {
        handleDeleteItemBtn(id);
    }

    return (
        <li>
            <span>
                <p>{title},</p> {subtitle}
            </span>
            <button onClick={handleDeleteBtn}>X</button>
        </li>
    )
}