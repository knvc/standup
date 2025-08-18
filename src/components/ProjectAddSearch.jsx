import {Fragment, useState} from 'react'

function ProjectAddSearch({addProjectName}) {
    const [isEditing, setIsEditing] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [nameInput, setNameInput] = useState('');
    const options = [
        { name: '#143 Fwd: FEBEG formulier', url: 'https://gitlab.com/3sign/clients/febeg/febeg-website-2023/-/issues/143' },
        { name: '#10134 logo OKV op de website bij de partners datum', url: 'https://gitlab.com/3sign/support/-/issues/10134' },
        { name: '#246 Datumformaat weergeven', url: 'https://gitlab.com/3sign/clients/agentschap-justitie-en-handhaving/arrestendatabank/-/issues/246' }
    ];

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

    function handleChange(targetInput) {
        setNameInput(targetInput);

        if (targetInput.length >= 3) {
            setIsDropdownVisible(true);
        } else {
            setIsDropdownVisible(false);
        }
    }

    function handleSelect(item) {
        setNameInput(item);
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
                            <button onClick={handleCancel}>cancel</button>
                        </div>
                        { isDropdownVisible && (
                            <div className="dropdown">
                                <ul>
                                    {options
                                        .filter((item) =>
                                            item.name.toLowerCase().includes(nameInput.toLowerCase())
                                        )
                                        .map((item, idx) => (
                                            <li
                                                key={idx}
                                                onClick={() => handleSelect(item.name)}
                                            >
                                                {item.name}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </Fragment>
            ) : (
                <div>{name}
                    <button onClick={handleEdit}>add item</button>
                </div>
            )}
        </>
    )
}

export default ProjectAddSearch
