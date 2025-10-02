
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import DatosSubirFactura from './FormSubir.json';
import DatosOptionsFactura from './OptionsFacturas.json';
import { DynamicForm } from "../../commons/DynamicForm";


function FormSubir() {

  const onSubmit = (data) => console.log(data);
  const [options, setOptions] = useState(null);

  DatosSubirFactura.find(field => field.name=="tipoFactura").options=options;

  useEffect(() => {
      fetch('/api/OptionsFacturas.json').then(response => response.json()).then(data => { 
        setOptions(data);
     });
  }, []);


  return (
    <DynamicForm fields={DatosSubirFactura} onSubmit={onSubmit} />
  );
}

export default FormSubir;


