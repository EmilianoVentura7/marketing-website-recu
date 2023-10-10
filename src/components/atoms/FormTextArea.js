import React from 'react';

const FormTextarea = ({ label, id, name, value, onChange, required }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}:</label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        rows="4"
        required={required}
      ></textarea>
    </div>
  );
};

export default FormTextarea;
