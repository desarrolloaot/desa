import { useForm, Controller } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

export function DynamicForm({ fields, onSubmit }) {
  const { control, handleSubmit,  formState: { errors }, } = useForm();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <Form.Group key={field.name} className="mb-3">
          <Form.Label>{field.label}</Form.Label>
          <Controller
            name={field.name}
            control={control}
            rules={field.rules}
            render={({ field: controllerField }) => {
              switch (field.type) {
                case "text":
                case "number":
                case "date":
                  return (
				  <>
				  <Form.Control type={field.type} isInvalid={!!errors[field.name]}  {...controllerField} />
				  <Form.Control.Feedback type="invalid">
                        {errors[field.name]?.message}
                      </Form.Control.Feedback></>)
                case "checkbox":
                  return (
                    <Form.Check
                      type="checkbox"
                      label={field.label}
                      checked={controllerField.value || false}
                      onChange={(e) => controllerField.onChange(e.target.checked)}
                    />
                  );
                case "select":
                  return (
                    <Form.Select {...controllerField}>
                      <option value="">-- Selecciona una opción --</option>
                      {field.options?.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Form.Select>
                  );
                default:
                  return null;
              }
            }}
          />
        </Form.Group>
      ))}

      <Button type="submit">Enviar</Button>
    </Form>
  );
}