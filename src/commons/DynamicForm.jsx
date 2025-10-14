import { useForm, Controller } from "react-hook-form";
import { Form, Button, Row, Col } from "react-bootstrap";

export function DynamicForm({ fields, onSubmit }) {
  const { control, handleSubmit,  formState: { errors }, } = useForm();

  return (
	<>
    <Form onSubmit={handleSubmit(onSubmit)}>
	  <Row className="align-items-center">
      {fields.map((field) => (
		<Col key={field.name} md={field.md || 6} sm={12} >
		{!field.empty && (
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
				  <Form.Control type={field.type} 
				  isInvalid={!!errors[field.name]}  
				  {...controllerField} 
				  readOnly={field.readOnly || false}
				  step={field.type === "number" ? field.step || 1 : undefined} 
				  />
				  <Form.Control.Feedback type="invalid">
                        {errors[field.name]?.message}
                      </Form.Control.Feedback>
					  </> );
                case "checkbox":
                  return (
                    <div className="d-flex align-items-center">
					<Form.Check 
                      type="checkbox"
					  
                      checked={controllerField.value || false}
                      onChange={(e) => controllerField.onChange(e.target.checked)}
                    />
					</div>
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
		)}
		</Col>
      ))}
	   </Row>

      <Button type="submit" className="btn btn-sm me-2">Enviar</Button>
	  
    </Form> 
	</>
  );
}