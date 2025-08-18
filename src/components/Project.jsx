import { useState } from 'react'

function Project({id, name, url, updateProjectName, deleteProject}) {
    const [isEditing, setIsEditing] = useState(false);
    const [nameInput, setNameInput] = useState('');

    function handleEdit() {
        setIsEditing(true);
    }

    function handleCancel() {
        setIsEditing(false);
    }

    function handleDelete() {
        setIsEditing(false);
        deleteProject(id);
    }

    function handleSave() {
        setIsEditing(false);
        if (nameInput !== '') {
            updateProjectName(id, nameInput);
        }
    }

    return (
        <>
            {isEditing ? (
                <div><span><input type="text" defaultValue={name} onChange={(e) => setNameInput(e.target.value)} autoFocus />
                <button onClick={handleSave}>save</button>
                <button onClick={handleCancel}>cancel</button>
                </span>
                </div>
            ) : (
                <div><a href={url} target="_blank">{name}</a>
                    <button onClick={handleEdit}>edit</button>
                    <button onClick={handleDelete}>delete</button>
                </div>
            )}
        </>
    )
}

export default Project
