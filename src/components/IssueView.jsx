function IssueView({id, name, url, projectId, onClickEdit, onClickDelete}) {
    return (
        <div>
            {url ? (
                <a target="_blank" href={url}>{name}</a>
            ) : (
                <span>{name}</span>
            )}
            <button onClick={() => onClickEdit()}>edit</button>
            <button onClick={() => onClickDelete(projectId, id)}>delete</button>
        </div>
    )
}

export default IssueView
