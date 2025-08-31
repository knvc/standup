import {Fragment, useState} from 'react'
import './App.css'
import Project from "./components/Project.jsx";
import ProjectAdd from "./components/ProjectAdd.jsx";

function App() {
  const [projectList, setProjectList] = useState([
      { id: 1, name: 'FEBEG', issues: [
          { id: 1, name: '#143 Fwd: FEBEG formulier', url: 'https://gitlab.com/3sign/clients/febeg/febeg-website-2023/-/issues/143' },
              { id: 2, name: '#10134 logo OKV op de website bij de partners datum', url: 'https://gitlab.com/3sign/support/-/issues/10134' },
      ]},
      { id: 2, name: 'EHB', issues: [
              { id: 3, name: '#143 Fwd: FEBEG formulier', url: 'https://gitlab.com/3sign/clients/febeg/febeg-website-2023/-/issues/143' },
              { id: 4, name: '#10134 logo OKV op de website bij de partners datum', url: 'https://gitlab.com/3sign/support/-/issues/10134' },
      ]}
  ]);

  function handleUpdateProject(targetProject) {
      const updatedProjects = projectList.map(project =>
          project.id === targetProject.id
              ? { ...project, name: targetProject.name, url: targetProject.url }
              : project
      );
      setProjectList(updatedProjects);
  }

  function handleDeleteProject(projectId, issueId) {
      if (!projectId && !issueId) {
          return;
      }

      if (issueId) {
          console.log(issueId);
          deleteProjectByIssueId(projectId, issueId)
          return;
      }

      deleteProjectById(projectId);
  }

  function deleteProjectById(projectId) {
      const updatedProjects = projectList.filter(p => p.id !== projectId);

      if (updatedProjects) {
          setProjectList(updatedProjects);
      }
  }

    function deleteProjectByIssueId(projectId, issueId) {
        const updatedProjects = projectList.map(project => {
            if (project.id === projectId) {
                return { ...project, issues : project.issues.filter(issue => issue.id !== issueId)};
            } else {
                return project;
            }
        });

        console.log(updatedProjects);

        if (updatedProjects) {
            setProjectList(updatedProjects);
        }
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
                    project={project}
                    updateProject={handleUpdateProject}
                    deleteProject={handleDeleteProject}
                />
            ))}
            <ProjectAdd
                addIssue={handleAddProjectName}
            />
        </main>
    </>
    )
}

export default App
