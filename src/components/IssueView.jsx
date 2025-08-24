function IssueView({name, url, editProject, deleteProject}) {
    return (
        <div>
            {url ? (
                <a target="_blank" href={url}>{name}</a>
            ) : (
                <span>{name}</span>
            )}
            <button onClick={() => editProject()}>edit</button>
            <button onClick={() => deleteProject()}>delete</button>
        </div>
    )
}

export default IssueView
