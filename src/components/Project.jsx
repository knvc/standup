import {Fragment, useState} from 'react'
import ProjectView from "./ProjectView.jsx";
import ProjectEdit from "./ProjectEdit.jsx";

function Project({id, name, url, updateProjectName, deleteProject}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleDelete() {
        setIsEditing(false);
        deleteProject(id);
    }

    function handleSave(project) {
        setIsEditing(false);
        updateProjectName({id: project.id, name: project.name, url: project.url});
    }

    return (
        <Fragment>
            { isEditing ? (
                <ProjectEdit
                    id={id}
                    name={name}
                    url={url}
                    saveEditProject={handleSave}
                    cancelEditProject={() => setIsEditing(false)}
                />
            ) : (
                <ProjectView
                    name={name}
                    url={url}
                    editProject={() => setIsEditing(true)}
                    deleteProject={handleDelete}
                />
            )}
        </Fragment>
    )
}

export default Project
