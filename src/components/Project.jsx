import {Fragment, useState} from 'react'
import ProjectEdit from "./ProjectEdit.jsx";
import ProjectView from "./ProjectView.jsx";

function Project({id, project, updateProject, deleteProject}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleDelete() {
        setIsEditing(false);
        deleteProject(project.id);
    }

    function handleSave(project) {
        setIsEditing(false);
        updateProject({id: project.id, name: project.name, url: project.url});
    }

    return (
        <Fragment>
            { isEditing ? (
                <ProjectEdit
                    id={id}
                    name={project.name}
                    url={project.url}
                    onClickSave={handleSave}
                    onClickCancel={() => setIsEditing(false)}
                />
            ) : (
                <ProjectView
                    name={project.name}
                    url={project.url}
                    onClickEdit={() => setIsEditing(true)}
                    onClickDelete={handleDelete}
                />
            )}
        </Fragment>
    )
}

export default Project
