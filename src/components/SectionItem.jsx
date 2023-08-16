import '../styles/SectionItem.css';

export default function SectionItem({title, subtitle = ''}) {
    return (
        <li><span className="title">{title}</span>, {subtitle}</li>
    )
}