import {Fragment, useState} from 'react'
import ProjectView from "./ProjectView.jsx";

function Project({id, name, url, updateProjectName, deleteProject}) {
    const [isEditing, setIsEditing] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [nameInput, setNameInput] = useState(name);
    const [urlInput, setUrlInput] = useState(url);
    const options = [
        { id: 3, name: '#143 Fwd: FEBEG formulier', url: 'https://gitlab.com/3sign/clients/febeg/febeg-website-2023/-/issues/143' },
        { id: 4, name: '#10134 logo OKV op de website bij de partners datum', url: 'https://gitlab.com/3sign/support/-/issues/10134' },
        { id: 5, name: '#246 Datumformaat weergeven', url: 'https://gitlab.com/3sign/clients/agentschap-justitie-en-handhaving/arrestendatabank/-/issues/246' }
    ];

    function handleDelete() {
        setIsEditing(false);
        deleteProject(id);
    }

    function handleSave() {
        setIsEditing(false);
        if (nameInput !== '') {
            updateProjectName({id: id, name: nameInput, url: urlInput});
        }
    }

    function handleChange(targetInput) {
        setNameInput(targetInput);
        setIsDropdownVisible(targetInput.length >= 3);
    }

    function handleSelect(project) {
        setNameInput(project.name);
        setUrlInput(project.url);
        setIsDropdownVisible(false);
    }

    return (
        <>
            {isEditing ? (
                <Fragment>
                    <div>
                        <div className="search-field">
                            <input type="text" value={nameInput} onChange={(e) => handleChange(e.target.value)} autoFocus />
                            <button onClick={handleSave}>save</button>
                            <button onClick={() => setIsEditing(false)}>cancel</button>
                        </div>
                        { isDropdownVisible && (
                            <div className="dropdown">
                                <ul>
                                    {options
                                        .filter((project) =>
                                            project.name.toLowerCase().includes(nameInput.toLowerCase())
                                        )
                                        .map((project, idx) => (
                                            <li
                                                key={idx}
                                                onClick={() => handleSelect(project)}
                                            >
                                                {project.name}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </Fragment>
            ) : (
                <ProjectView
                    name={name}
                    url={url}
                    editProject={() => setIsEditing(true)}
                    deleteProject={handleDelete}
                />
            )}
        </>
    )
}

export default Project
