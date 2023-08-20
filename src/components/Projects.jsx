import SectionTitle from "./SectionTitle";
import SectionContent from "./SectionContent";
import SectionItem from "./SectionItem";
import { mdiFolderMultiple } from '@mdi/js';
import { useState } from 'react';
import Buttons from './Buttons';
import { v4 as uuidv4 } from 'uuid';

const initialProject = {
    id: '',
    title: '',
    url: '',
    description: '',
}

export default function Projects({expandId, handleExpandBtn, editId, setEditId, handleEditBtn, person, setPerson}) {
    const [project, setProject] = useState(initialProject);

    const handleInputChange = (e) => {
        setProject({...project, [e.target.id] : e.target.value});
    }

    const handleSaveBtn = () => {
        const isFilled = project.title !== '' && project.url !== '' && project.description !== '';
        if (isFilled) {
            if(project.id === '') {
                project.id = uuidv4();
                setPerson({...person, projects: [...person.projects, project]});
            } else {
                let newProjects = person.projects.filter((item) => item.id !== project.id);
                newProjects = [...newProjects, project];
                setPerson({...person, projects : newProjects});
            }
            setEditId('');
            setProject(initialProject);
        }
    }

    const handleDeleteItemBtn = (id) => {
        const newProjects = person.projects.filter((item) => item.id !== id);
        setPerson({...person, projects : newProjects});
    }

    const handleEditItemBtn = (id) => {
        const item = person.projects.find((item) => item.id === id);
        setProject(item);
        setEditId('projects');
    }

    const sectionItems = person.projects.map(item=> <SectionItem key={item.id} 
        title={item.title} 
        id={item.id} 
        handleDeleteItemBtn={handleDeleteItemBtn}
        handleEditItemBtn={handleEditItemBtn}/>);

    return (
        <div className="projects">
            {editId === 'projects' ?
                <div className="form">
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" id='title' value={project.title} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="url">Enter link</label>
                        <input type="url" id='url' value={project.url} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" cols="30" rows="10"
                        value={project.description} onChange={handleInputChange} maxLength="120"></textarea>
                    </div>
                    <Buttons setEditId={setEditId} handleSaveBtn={handleSaveBtn} setState={setProject} initialState={initialProject}/>
                </div> 
            :
                <>
                <SectionTitle 
                label={'projects'}
                handleExpandBtn={handleExpandBtn} 
                icon ={mdiFolderMultiple}/>
                {expandId === 'projects' && 
                <SectionContent 
                btnLabel={'Projects'}
                sectionItems={sectionItems}
                handleEditBtn={handleEditBtn}/>}
                </>
            }
        </div>
    )
}