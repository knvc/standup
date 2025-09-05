import {Fragment, useState} from 'react'
import IssueView from "./IssueView.jsx";
import IssueEdit from "./IssueEdit.jsx";

function Issue({issue, projectId, updateIssue, deleteIssue}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleDelete(projectId, IssueId) {
        setIsEditing(false);
        deleteIssue(projectId, IssueId);
    }

    function handleSave(issue) {
        setIsEditing(false);
        updateIssue(projectId, issue);
    }

    return (
        <Fragment>
            { isEditing ? (
                <IssueEdit
                    id={issue.id}
                    name={issue.name}
                    url={issue.url}
                    onClickSave={handleSave}
                    onClickCancel={() => setIsEditing(false)}
                />
            ) : (
                <IssueView
                    id={issue.id}
                    name={issue.name}
                    url={issue.url}
                    projectId={projectId}
                    onClickEdit={() => setIsEditing(true)}
                    onClickDelete={handleDelete}
                />
            )}
        </Fragment>
    )
}

export default Issue
