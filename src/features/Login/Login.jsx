import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Form, FloatingLabel } from 'react-bootstrap';
import { CuitLoginForm } from './CuitLoginForm';
import { IntranetLoginForm } from './IntranetLoginForm';

const loginStrategies = {
  cuit: <CuitLoginForm />,
  intranet: <IntranetLoginForm />,
};

// La lógica de submit se pasaría como prop para cumplir con DIP.
function Login({ onLoginSubmit }) {
  const [loginType, setLoginType] = useState('cuit');
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoginType = (e) => {
    e.preventDefault();
    setLoginType(loginType === 'cuit' ? 'intranet' : 'cuit');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    data.loginType = loginType;

    console.log("Formulario enviado:", data);

    // Aquí se llamaría a la función que viene por props.
    // setIsLoading(true);
    // onLoginSubmit(data).finally(() => setIsLoading(false));
  };

  return (
    <Container fluid className='my-5'>

      <Row className='g-0 align-items-center justify-content-center'>

        <Col xs={12} md={8} lg={6} xl={3}>

          <Card className='my-5' style={{background: 'hsla(0, 0%, 100%, 0.55)'}}>
            <Card.Body className='p-5 text-center'>
              <h2 className="fw-bold mb-5">Ingreso al Sistema</h2>

              <Form onSubmit={handleSubmit}>
                  {/* Aquí aplicamos la estrategia de renderizado */}
                  {loginStrategies[loginType]}

                  <FloatingLabel controlId="formPassword" label="Contraseña" className="mb-4">
                      <Form.Control name="password" type="password" placeholder="Contraseña" required />
                  </FloatingLabel>

                  <Button className='w-100 mb-4' size='md' type="submit" disabled={isLoading}>
                    {isLoading ? 'Ingresando...' : 'Ingresar'}
                  </Button>

                  <div className="text-center">
                    <a href="#!" onClick={toggleLoginType} role="button">
                      {loginType === 'cuit' ? 'Ingresar con usuario de Puntonet' : 'Ingresar con CUIT'}
                    </a>
                  </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>

      </Row>

    </Container>
  );
}

export default Login;