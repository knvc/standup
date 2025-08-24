import {Fragment, useState} from 'react'
import IssueView from "./IssueView.jsx";
import IssueEdit from "./IssueEdit.jsx";

function Issue({id, name, url, updateProjectName, deleteProject}) {
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
                <IssueEdit
                    id={id}
                    name={name}
                    url={url}
                    saveEditProject={handleSave}
                    cancelEditProject={() => setIsEditing(false)}
                />
            ) : (
                <IssueView
                    name={name}
                    url={url}
                    editProject={() => setIsEditing(true)}
                    deleteProject={handleDelete}
                />
            )}
        </Fragment>
    )
}

export default Issue
