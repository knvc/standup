import {Fragment, useState} from 'react'
import './App.css'
import Project from "./components/Project.jsx";
import ProjectAdd from "./components/ProjectAdd.jsx";

function App() {
  const [projectList, setProjectList] = useState([
      { id: 1, name: '#143 Fwd: FEBEG formulier', url: 'https://gitlab.com/3sign/clients/febeg/febeg-website-2023/-/issues/143' },
      { id: 2, name: '#10134 logo OKV op de website bij de partners datum', url: 'https://gitlab.com/3sign/support/-/issues/10134' },
      { id: 3, name: '#246 Datumformaat weergeven', url: 'https://gitlab.com/3sign/clients/agentschap-justitie-en-handhaving/arrestendatabank/-/issues/246' }
  ]);

  function handleUpdateProjectName(targetProject) {
      const updatedProjects = projectList.map(project =>
          project.id === targetProject.id
              ? { ...project, name: targetProject.name, url: targetProject.url }
              : project
      );
      setProjectList(updatedProjects);
  }

  function handleDeleteProject(targetId) {
      const updatedProjects = projectList.filter(p => p.id !== targetId);
      setProjectList(updatedProjects);
  }

  function handleAddProjectName(targetProject) {
      // @todo find a way to get highest Id since sorting will take place in a later stadium
      const projectListLastId = projectList[projectList.length-1].id;
      const updatedProjects = [...projectList, { id: projectListLastId+1, name: targetProject.name, url: targetProject.url }];
      setProjectList(updatedProjects);
  }

    return (
    <>
        <main>
            { projectList.map(project => (
                <Project
                    key={project.id}
                    id={project.id}
                    name={project.name}
                    url={project.url}
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
