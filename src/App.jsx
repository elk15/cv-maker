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
import DownloadButton from './components/DownloadButton';

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
  role: 'Software Engineer',
  email: 'janeSmith@mail.com',
  phone: '6970320192',
  location: 'London, England',
  website: 'https://www.google.com/',
  portfolio: '',
  education : [
    {
      id: education1,
      degree: 'BSc Computer Science',
      university: 'University of London',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      startYear: '2010',
      endYear: '2014',
    },
    {
      id: education2,
      degree: 'MSc Software Engineering',
      university: 'University of London',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      startYear: '2014',
      endYear: '2016',
    }
  ],
  work: [
    {
      id: work1,
      title: 'Junior Web Developer',
      employer: 'A Company',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      startYear: '2014',
      endYear: '2017'
    },
    {
      id: work2,
      title: 'Java Developer',
      employer: 'Another Company',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      startYear: '2017',
      endYear: '2021'
    },
    {
      id: work3,
      title: 'Senior Software Engineer',
      employer: 'Another Company',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      startYear: '2021',
      endYear: ''
    }
  ],
  projects: [
  ],
  skills: [
    {
      id: skills1,
      title: 'Front End',
      items: ['HTML', 'CSS', 'Javascript', 'React', 'Angular', 'Vue', 'Jest']
    },
    {
      id: skills2,
      title: 'Back End',
      items: ['Java', 'Python', 'C++', 'C#', 'SQL', 'MongoDB']
    },
    {
      id: skills3,
      title: 'Other',
      items: ['Figma', 'Git', 'React Native']
    }
  ],
  certificates: [
  ],
  github: 'https://github.com/li',
  linkedin: 'https://www.linkedin.com/',
}

const emptyPerson = {
  firstName : '',
  lastName: '',
  role: '',
  email: '',
  phone: '',
  location: '',
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

  const resetResume = () => {
    setPerson(emptyPerson);
  }

  const loadExample = () => {
    setPerson(initialPerson);
  }

  const fullName = person.firstName + '_' + person.lastName;

  return (
    <div className='container'>
     <main id="edit-container">
      <Section>
        <header id="header-btns">
          <button className='header-button' onClick={resetResume}>Clear Resume</button>
          <button className='header-button' onClick={loadExample}>Load Example</button>
          <DownloadButton name={fullName}/>
        </header>
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
