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
        </div>
    )
}

export default ProjectView
