import { useState } from 'react'
import './App.css'
import Education from './components/Education';
import PersonalInfo from './components/PersonalInfo'
import Section from './components/Section'
import Work from './components/Work';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Links from './components/Links';
import ResumePreview from './components/ResumePreview';
import { v4 as uuidv4 } from 'uuid';

const education1 = uuidv4();
const education2 = uuidv4();
const work1 = uuidv4();
const work2 = uuidv4();
const work3 = uuidv4();
const skills1 = uuidv4();
const skills2 = uuidv4();
const skills3 = uuidv4();


const initialPerson = {
  firstName : 'Jane',
  lastName: 'Smith',
  role: 'UI Designer',
  email: 'janeSmith@mail.com',
  phone: '6970320192',
  location: 'London, England',
  website: '',
  portfolio: '',
  education : [
  ],
  work: [
  ],
  projects: [
  ],
  skills: [
  ],
  certificates: [
  ],
  github: '',
  linkedin: '',
}

function App() {
  const [expandId, setExpandId] = useState('');
  const [editId, setEditId] = useState('');
  const [person, setPerson] = useState(initialPerson);

  const handleDisplaySections = (id) => {
    return editId === '' || editId === id ? {display: 'block'} : {display : 'none'};
  }

  const handleExpandBtn = (e) => {
    setExpandId(e.currentTarget.dataset.id);
  }

  const handleEditBtn = (e) => {
    setEditId(e.currentTarget.dataset.id);
  }

  return (
    <div className='container'>
     <main id="edit-container">
      <Section>
        <button>Clear Resume</button>
        <button>Load Example</button>
        <button>Download Resume</button>
      </Section>
      <Section canDisplay={handleDisplaySections('personal-info')}>
        <PersonalInfo 
        editId={editId} 
        setEditId={setEditId} 
        handleEditBtn={handleEditBtn}
        person={person}
        setPerson={setPerson}/>
      </Section>
      <Section canDisplay={handleDisplaySections('education')}>
        <Education 
        expandId={expandId} 
        handleExpandBtn={handleExpandBtn}
        editId={editId} 
        setEditId={setEditId} 
        handleEditBtn={handleEditBtn}
        person={person}
        setPerson={setPerson}/>
      </Section>
      <Section canDisplay={handleDisplaySections('work')}>
        <Work 
        expandId={expandId} 
        handleExpandBtn={handleExpandBtn}
        editId={editId} 
        setEditId={setEditId} 
        handleEditBtn={handleEditBtn}
        person={person}
        setPerson={setPerson}/>
      </Section>
      <Section canDisplay={handleDisplaySections('projects')}>
        <Projects 
        expandId={expandId} 
        handleExpandBtn={handleExpandBtn}
        editId={editId} 
        setEditId={setEditId} 
        handleEditBtn={handleEditBtn}
        person={person}
        setPerson={setPerson}/>
      </Section>
      <Section canDisplay={handleDisplaySections('skills')}>
        <Skills 
        expandId={expandId} 
        handleExpandBtn={handleExpandBtn}
        editId={editId} 
        setEditId={setEditId} 
        handleEditBtn={handleEditBtn}
        person={person}
        setPerson={setPerson}
        />
      </Section>
      <Section canDisplay={handleDisplaySections('certificates')}>
        <Certificates 
        expandId={expandId} 
        handleExpandBtn={handleExpandBtn}
        editId={editId} 
        setEditId={setEditId} 
        handleEditBtn={handleEditBtn}
        person={person}
        setPerson={setPerson}/>
      </Section>
      <Section canDisplay={handleDisplaySections('links')}>
        <Links 
        expandId={expandId} 
        handleExpandBtn={handleExpandBtn}
        editId={editId} 
        setEditId={setEditId} 
        handleEditBtn={handleEditBtn}
        person={person}
        setPerson={setPerson}/>
      </Section>
     </main>
     <div id="preview-container">
      <ResumePreview person={person}/>
     </div>
    </div>
  )
}

export default App
