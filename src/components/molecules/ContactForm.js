import React from 'react';
import FormInput from '../atoms/FormInput';
import FormTextarea from '../atoms/FormTextArea';
import '../../styles/ContactForm.css'

const ContactForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Contacto</h2>
        <FormInput
          label="Nombre"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Correo Electrónico"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormTextarea
          label="Mensaje"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-button">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
