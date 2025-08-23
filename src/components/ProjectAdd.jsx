import {Fragment, useState} from 'react'
import ProjectEdit from "./ProjectEdit.jsx";

function ProjectAdd({addProjectName}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleSave(project) {
        console.log(project);
        setIsEditing(false);
        addProjectName({name: project.name, url: project.url});
    }

    return (
        <>
            {isEditing ? (
                <ProjectEdit
                    id={0}
                    name={''}
                    url={null}
                    saveEditProject={handleSave}
                    cancelEditProject={() => setIsEditing(false)}
                />
            ) : (
                <button onClick={() => setIsEditing(true)}>add item</button>
            )}
        </>
    )
}

export default ProjectAdd
