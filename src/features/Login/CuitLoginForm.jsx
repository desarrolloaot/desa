import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useCuitInput } from './useCuitInput';

export function CuitLoginForm() {
  const { cuit, handleCuitChange } = useCuitInput('');

  return (
    <FloatingLabel controlId="formCUIT" label="CUIT" className="mb-4">
      <Form.Control
        name="identifier" // Usamos un nombre genérico para el submit
        type="text"
        placeholder="Ingrese el CUIT"
        value={cuit}
        onChange={handleCuitChange}
        maxLength="13"
        required
      />
    </FloatingLabel>
  );
}