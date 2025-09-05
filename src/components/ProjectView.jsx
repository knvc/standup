function ProjectView({name, url, onClickEdit, onClickDelete}) {
    return (
        <div>
            {url ? (
                <a target="_blank" href={url}>{name}</a>
            ) : (
                <span>{name}</span>
            )}
            <button onClick={() => onClickEdit()}>edit</button>
            <button onClick={() => onClickDelete()}>delete</button>
            <button onClick={() => console.log()}>add issue</button>
        </div>
    )
}

export default ProjectView
