import { useState } from 'react'
import './App.css'
import Education from './components/Education';
import PersonalInfo from './components/PersonalInfo'
import Section from './components/Section'
import Work from './components/Work';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Socials from './components/Socials';
import ResumePreview from './components/ResumePreview';




function App() {
  const [expandId, setExpandId] = useState('');

  const handleExpandBtn = (e) => {
    setExpandId(e.currentTarget.dataset.id);
  }

  return (
    <div className='container'>
     <main id="edit-container">
      <Section>
        <button>Clear Resume</button>
        <button>Load Example</button>
        <button>Download Resume</button>
      </Section>
      <Section>
        <PersonalInfo></PersonalInfo>
      </Section>
      <Section>
        <Education expandId={expandId} handleExpandBtn={handleExpandBtn}/>
      </Section>
      <Section>
        <Work expandId={expandId} handleExpandBtn={handleExpandBtn}/>
      </Section>
      <Section>
        <Projects expandId={expandId} handleExpandBtn={handleExpandBtn}/>
      </Section>
      <Section>
        <Skills expandId={expandId} handleExpandBtn={handleExpandBtn}/>
      </Section>
      <Section>
        <Certificates expandId={expandId} handleExpandBtn={handleExpandBtn}/>
      </Section>
      <Section>
        <Socials expandId={expandId} handleExpandBtn={handleExpandBtn}/>
      </Section>
     </main>
     <div id="preview-container">
      <ResumePreview/>
     </div>
    </div>
  )
}

export default App
