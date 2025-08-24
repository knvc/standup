import {Fragment, useState} from 'react'
import IssueEdit from "./IssueEdit.jsx";

function IssueAdd({addIssue}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleSave(project) {
        setIsEditing(false);
        addIssue({name: project.name, url: project.url});
    }

    return (
        <>
            {isEditing ? (
                <IssueEdit
                    id={null}
                    name={null}
                    url={null}
                    onClickSave={handleSave}
                    onClickCancel={() => setIsEditing(false)}
                />
            ) : (
                <button onClick={() => setIsEditing(true)}>add item</button>
            )}
        </>
    )
}

export default IssueAdd
