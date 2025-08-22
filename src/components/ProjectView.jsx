function ProjectView({id, name, url, editProject, deleteProject}) {
    return (
        <div>
            <a target="_blank" href={url}>{name}</a>
            <button onClick={() => editProject()}>edit</button>
            <button onClick={() => deleteProject()}>delete</button>
        </div>
    )
}

export default ProjectView
