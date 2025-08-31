import {Fragment, useState} from 'react'
import ProjectEdit from "./ProjectEdit.jsx";
import ProjectView from "./ProjectView.jsx";
import Issue from "./Issue.jsx";

function Project({id, project, updateProject, deleteProject}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleDeleteProject() {
        setIsEditing(false);
        deleteProject(project.id);
    }

    function handleSaveProject(project) {
        setIsEditing(false);
        updateProject({id: project.id, name: project.name, url: project.url});
    }

    function handleUpdateIssue() {

    }

    const projectIssues = project.issues.map(issue => (
        <Issue
            key={issue.id}
            issue={issue}
            projectId={project.id}
            updateIssue={handleUpdateIssue}
            deleteIssue={(projectId, issueId) => deleteProject(projectId, issueId)}
        />
    ))

    return (
        <Fragment>
            { isEditing ? (
                <ProjectEdit
                    id={id}
                    name={project.name}
                    url={project.url}
                    onClickSave={handleSaveProject}
                    onClickCancel={() => setIsEditing(false)}
                />
            ) : (
                <ProjectView
                    name={project.name}
                    url={project.url}
                    onClickEdit={() => setIsEditing(true)}
                    onClickDelete={handleDeleteProject}
                />
            )}
            { projectIssues }
        </Fragment>
    )
}

export default Project
