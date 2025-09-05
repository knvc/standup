import {Fragment, useState} from 'react'
import ProjectEdit from "./ProjectEdit.jsx";

function ProjectAdd({addIssue}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleSave(project) {
        setIsEditing(false);
        addIssue({name: project.name, url: project.url});
    }

    return (
        <>
            {isEditing ? (
                <ProjectEdit
                    id={null}
                    name={null}
                    url={null}
                    onClickSave={handleSave}
                    onClickCancel={() => setIsEditing(false)}
                />
            ) : (
                <button onClick={() => setIsEditing(true)}>add project</button>
            )}
        </>
    )
}

export default ProjectAdd
