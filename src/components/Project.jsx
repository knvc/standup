import {Fragment, useState} from 'react'
import ProjectEdit from "./ProjectEdit.jsx";
import ProjectView from "./ProjectView.jsx";

function Project({id, name, url, updateIssue, deleteIssue}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleDelete() {
        setIsEditing(false);
        deleteIssue(id);
    }

    function handleSave(project) {
        setIsEditing(false);
        updateIssue({id: project.id, name: project.name, url: project.url});
    }

    return (
        <Fragment>
            { isEditing ? (
                <ProjectEdit
                    id={id}
                    name={name}
                    url={url}
                    onClickSave={handleSave}
                    onClickCancel={() => setIsEditing(false)}
                />
            ) : (
                <ProjectView
                    name={name}
                    url={url}
                    onClickEdit={() => setIsEditing(true)}
                    onClickDelete={handleDelete}
                />
            )}
        </Fragment>
    )
}

export default Project
