import {useState} from "react";

function IssueEdit({id, name, url, onClickSave, onClickCancel}) {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [nameInput, setNameInput] = useState(name ?? '');
    const [urlInput, setUrlInput] = useState(url);
    const options = [
        { id: 3, name: '#143 Fwd: FEBEG formulier', url: 'https://gitlab.com/3sign/clients/febeg/febeg-website-2023/-/issues/143' },
        { id: 4, name: '#10134 logo OKV op de website bij de partners datum', url: 'https://gitlab.com/3sign/support/-/issues/10134' },
        { id: 5, name: '#246 Datumformaat weergeven', url: 'https://gitlab.com/3sign/clients/agentschap-justitie-en-handhaving/arrestendatabank/-/issues/246' }
    ];

    function handleSave() {
        if (nameInput !== '') {
            onClickSave({id: id, name: nameInput, url: urlInput});
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

    const filteredOptions = options.filter(project =>
        project.name.toLowerCase().includes(nameInput.toLowerCase())
    );

    let containsFilteredOptions = filteredOptions.length > 0;

    const dropdownList = filteredOptions.map((project) => (
        <li key={project.id} onClick={() => handleSelect(project)}>
            {project.name}
        </li>
    ));

    return (
        <div>
            <div className="search-field">
                <input type="text" value={nameInput} onChange={(e) => handleChange(e.target.value)} autoFocus />
                <button onClick={handleSave}>save</button>
                <button onClick={() => onClickCancel()}>cancel</button>
            </div>
            { isDropdownVisible && containsFilteredOptions && (
                <div className="dropdown">
                    <ul>
                        { dropdownList }
                    </ul>
                </div>
            )}
        </div>
    )
}

export default IssueEdit
