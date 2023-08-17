import '../styles/SectionItem.css';

export default function SectionItem({title, subtitle = ''}) {
    return (
        <li><p>{title},</p> {subtitle}</li>
    )
}