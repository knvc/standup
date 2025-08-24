import {Fragment, useState} from 'react'
import IssueView from "./IssueView.jsx";
import IssueEdit from "./IssueEdit.jsx";

function Issue({id, name, url, updateIssue, deleteIssue}) {
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
                <IssueEdit
                    id={id}
                    name={name}
                    url={url}
                    onClickSave={handleSave}
                    onClickCancel={() => setIsEditing(false)}
                />
            ) : (
                <IssueView
                    name={name}
                    url={url}
                    onClickEdit={() => setIsEditing(true)}
                    onClickDelete={handleDelete}
                />
            )}
        </Fragment>
    )
}

export default Issue
