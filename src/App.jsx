import { useState } from 'react'
import './App.css'
import Section from './components/Section'

function App() {

  return (
    <div className='container'>
     <main id="edit-container">
      <Section>
        <button>Clear Resume</button>
        <button>Load Example</button>
        <button>Download Resume</button>
      </Section>
     </main>
     <div id="preview-container">
      preview
     </div>
    </div>
  )
}

export default App
