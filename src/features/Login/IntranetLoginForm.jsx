import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

export function IntranetLoginForm() {
  return (
    <FloatingLabel controlId="formIntranetUser" label="Usuario Puntonet" className="mb-4">
      <Form.Control
        name="identifier" // Usamos un nombre genérico para el submit
        type="text"
        placeholder="Ingrese su usuario de Puntonet"
        required
      />
    </FloatingLabel>
  );
}