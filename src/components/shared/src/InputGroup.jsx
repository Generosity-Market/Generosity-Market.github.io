import React from 'react';
import '../styles/InputGroup.css';

const InputGroup = ({
    handleUpdateState,
    inputOptions,
    selectOptions,
    state,
}) => {

    const getSelectOptions = (options) => {
        return (
            <select
                key='select-type'
                name='type'
                size={1}
                onChange={handleUpdateState('type')}
                value={state.type}
            >
                <option value="">- Type of Cause -</option>
                {options.map((option) => {
                    return (
                        <option key={option} value={option}>{option}</option>
                    );
                })}
            </select>
        );
    };

    const getTextArea = (input) => {
        return (
            <textarea
                key={input.name}
                name={input.name}
                placeholder={input.placeholder}
                onChange={handleUpdateState(input.name)}
                value={state[input.name]}
            >
            </textarea>
        );
    };

    const getInput = (input) => {
        return (
            <input
                key={input.name}
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                onChange={handleUpdateState(input.name)}
                value={state[input.name]}
            />
        );
    };

    let inputs = inputOptions.map((input) => {
        if (input.type === 'select') {
            return getSelectOptions(selectOptions);
        } else if (input.type === 'textarea') {
            return getTextArea(input);
        } else {
            return getInput(input);
        }
    });

    return (
        <div className="InputGroup">
            {inputs}
        </div>
    );
};

export default InputGroup;
