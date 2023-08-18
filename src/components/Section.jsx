import '../styles/Section.css';

export default function Section({canDisplay = {display : 'block'}, children}) {
    return (
        <div className="section" style={canDisplay}>
            {children}
        </div>
    );
}