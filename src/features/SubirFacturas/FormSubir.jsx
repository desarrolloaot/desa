
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

function FormSubir() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    mode: "onBlur"  // valida al blur automáticamente
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Contraseña</Form.Label>
        <Controller
          name="password"
          control={control}
          rules={{ required: "Contraseña obligatoria" }}
          render={({ field }) => (
            <Form.Control
              {...field}            // RHF maneja value, onChange, onBlur, name, ref
              type="password"
              isInvalid={!!errors.password}  // muestra el error si existe
            />
          )}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Button type="submit" className="mt-3">Enviar</Button>
    </Form>
  );
}

export default FormSubir;


