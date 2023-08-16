import '../styles/Section.css';

export default function Section({children}) {
    return (
        <div className="section">
            {children}
        </div>
    );
}