import {Fragment, useState} from 'react'
import IssueEdit from "./IssueEdit.jsx";

function IssueAdd({addProjectName}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleSave(project) {
        console.log(project);
        setIsEditing(false);
        addProjectName({name: project.name, url: project.url});
    }

    return (
        <>
            {isEditing ? (
                <IssueEdit
                    id={null}
                    name={null}
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

export default IssueAdd
