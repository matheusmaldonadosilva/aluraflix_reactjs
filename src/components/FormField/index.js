import React from 'react';
import PropTypes from 'prop-types';

function FormField({
    label, type, name, value, onChange,
}) {

    const fiedlId = `id_${name}`;

    return (
        <div>
            <label
                htmlFor={fiedlId}
            >
                {label}
            :
            <input
                    id={fiedlId}
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
            </label>
        </div>
    );
}

FormField.PropTypes = {
    label: PropTypes.string.isRequired,
    type: 
    name, 
    value, 
    onChange,
};
export default FormField;
