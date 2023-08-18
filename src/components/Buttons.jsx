export default function Buttons({setEditId, setPerson, person, temporalState}) {
    const handleCancelBtn = () => {
        setEditId('');
    }

    const handleSaveBtn = () => {
        setPerson({...person, ...temporalState});
        setEditId('');
    }
    return (
        <div className='buttons'>
                    <button className='save-btn' onClick={handleSaveBtn}>Save</button> 
                    <button className='calcel-btn' onClick={handleCancelBtn}>Cancel</button>
        </div>
    );
}