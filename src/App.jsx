import {Fragment, useState} from 'react'
import './App.css'
import Project from "./components/Project.jsx";
import ProjectAdd from "./components/ProjectAdd.jsx";

function App() {
  const [projectList, setProjectList] = useState([
      { id: 1, name: 'project one' },
      { id: 2, name: 'project two' },
      { id: 3, name: 'project three' },
  ]);

  function handleUpdateProjectName(targetId, targetName) {
      const updatedProjects = projectList.map(project =>
          project.id === targetId
              ? { ...project, name: targetName }
              : project
      );
      setProjectList(updatedProjects);
  }

  function handleDeleteProject(targetId) {
      const updatedProjects = projectList.filter(p => p.id !== targetId);
      setProjectList(updatedProjects);
  }

  function handleAddProjectName(targetName) {
      const projectListLastId = projectList[projectList.length-1].id;
      const updatedProjects = [...projectList, { id: projectListLastId+1, name: targetName }];
      setProjectList(updatedProjects);
  }

    return (
    <>
        <header>
            <h1>Projects</h1>
        </header>
        <main>
            { projectList.map(project => (
                <Project
                    key={project.id}
                    id={project.id}
                    name={project.name}
                    updateProjectName={handleUpdateProjectName}
                    deleteProject={handleDeleteProject}
                />
            ))}
            <ProjectAdd
                addProjectName={handleAddProjectName}
            />
        </main>
    </>
    )
}

export default App
