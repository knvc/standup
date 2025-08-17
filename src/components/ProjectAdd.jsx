import { useState } from 'react'

function ProjectAdd({addProjectName}) {
    const [isEditing, setIsEditing] = useState(false);
    const [nameInput, setNameInput] = useState('');

    function handleEdit() {
        setIsEditing(true);
    }

    function handleCancel() {
        setIsEditing(false);
    }

    function handleSave() {
        setIsEditing(false);
        if (nameInput !== '') {
            addProjectName(nameInput);
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
                <div>{name}
                    <button onClick={handleEdit}>add item</button>
                </div>
            )}
        </>
    )
}

export default ProjectAdd
