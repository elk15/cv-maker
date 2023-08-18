import '../styles/Section.css';

export default function Section({canDisplay, children}) {
    return (
        <div className="section" style={canDisplay}>
            {children}
        </div>
    );
}