import SectionTitle from "./SectionTitle";
import SectionContent from "./SectionContent";
import SectionItem from "./SectionItem";
import { mdiFileCertificate } from '@mdi/js';
import { useState } from 'react';
import Buttons from './Buttons';
import { v4 as uuidv4 } from 'uuid';

const initialCertificate = {
    id: '',
    title: '',
    url: ''
}

export default function Skills({expandId, handleExpandBtn, editId, setEditId, handleEditBtn, person, setPerson}) {
    const [certificate, setCertificate] = useState(initialCertificate);

    const handleInputChange = (e) => {
        setCertificate({...certificate, [e.target.id] : e.target.value});
    }

    const handleSaveBtn = () => {
        const isFilled = certificate.title !== '' && certificate.url !== '';
        if (isFilled) {
            if(certificate.id === '') {
                certificate.id = uuidv4();
                setPerson({...person, certificates: [...person.certificates, certificate]});
            } else {
                let newCertificates = person.certificates.filter((item) => item.id !== certificate.id);
                newCertificates = [...newCertificates, certificate];
                setPerson({...person, certificates : newCertificates});
            }
            setEditId('');
            setCertificate(initialCertificate);
        }
    }

    const handleDeleteItemBtn = (id) => {
        const newCertificates = person.certificates.filter((item) => item.id !== id);
        setPerson({...person, certificates : newCertificates});
    }

    const handleEditItemBtn = (id) => {
        const item = person.certificates.find((item) => item.id === id);
        setCertificate(item);
        setEditId('certificates');
    }

    const sectionItems = person.certificates.map(item=> <SectionItem key={item.id} 
        title={item.title} 
        id={item.id} 
        handleDeleteItemBtn={handleDeleteItemBtn}
        handleEditItemBtn={handleEditItemBtn}/>);

    return (
        <div className="certificates">
            {editId === 'certificates' ?
                <div className="form">
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" id='title' value={certificate.title} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="url">Enter link</label>
                        <input type="url" id='url' value={certificate.url} onChange={handleInputChange}/>
                    </div>
                    <Buttons setEditId={setEditId} handleSaveBtn={handleSaveBtn} setState={setCertificate} initialState={initialCertificate}/>
                </div> 
            :
                <>
                <SectionTitle 
                label={'certificates'}
                handleExpandBtn={handleExpandBtn} 
                icon ={mdiFileCertificate}/>
                {expandId === 'certificates' && 
                <SectionContent 
                btnLabel={'Certificates'}
                sectionItems={sectionItems}
                handleEditBtn={handleEditBtn}/>}
                </>
            }
        </div>
    )
}