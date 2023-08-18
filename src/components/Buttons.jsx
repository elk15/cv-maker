export default function Buttons({setEditId, handleSaveBtn, setState}) {
    const handleCancelBtn = () => {
        setEditId('');
        setState({});
    }

    return (
        <div className='buttons'>
                    <button className='save-btn' onClick={handleSaveBtn}>Save</button> 
                    <button className='calcel-btn' onClick={handleCancelBtn}>Cancel</button>
        </div>
    );
}