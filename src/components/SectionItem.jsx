import '../styles/SectionItem.css';

export default function SectionItem({title, subtitle = '', id, handleDeleteItemBtn, handleEditItemBtn}) {
    const handleDeleteBtn = () => {
        handleDeleteItemBtn(id);
    }

    const handleEditBtn = () => {
        handleEditItemBtn(id);
    }

    return (
        <li>
            <span onClick={handleEditBtn}>
                <p>{title},</p> {subtitle}
            </span>
            <button onClick={handleDeleteBtn}>X</button>
        </li>
    )
}