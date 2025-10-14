import React, { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import "bootstrap-icons/font/bootstrap-icons.css";
import { DynamicForm } from "../../commons/DynamicForm";
import DatosSubirFactura from "./FormSubir.json";



import "../../../src/App.css";

const FormSubir = () => {
  const [progreso, setProgreso] = useState(0);
  const [preview, setPreview] = useState(null);
  const [subiendo, setSubiendo] = useState(false);
  const [archivoNombre, setArchivoNombre] = useState(null);
  const inputFileRef = useRef(null);
  const xhrRef = useRef(null);

  const resetUpload = () => {
    if (xhrRef.current) {
      xhrRef.current.abort();
      xhrRef.current = null;
    }
    if (inputFileRef.current) {
      inputFileRef.current.value = null;
    }
    setProgreso(0);
    setPreview(null);
    setSubiendo(false);
    setArchivoNombre(null);
  };

  const uploadFile = (file) => {
    setSubiendo(true);
    setArchivoNombre(file.name);

    const formData = new FormData();
    formData.append("archivo", file);

    const xhr = new XMLHttpRequest();
    xhrRef.current = xhr;

    xhr.upload.addEventListener("progress", (event) => {
      if (event.lengthComputable) {
        setProgreso(Math.round((event.loaded / event.total) * 100));
      }
    });

    xhr.addEventListener("load", () => {
      xhrRef.current = null;
      setProgreso(100);
      setSubiendo(false);
      try {
        const data = JSON.parse(xhr.responseText);
        if (data.url) setPreview(data.url);
      } catch {
        console.error("Respuesta no válida:", xhr.responseText);
      }
    });

    xhr.addEventListener("error", () => {
      console.error("Error en la subida");
      xhrRef.current = null;
      setSubiendo(false);
    });

    xhr.addEventListener("abort", () => {
      console.log("Subida cancelada");
      xhrRef.current = null;
      setSubiendo(false);
    });

    xhr.open("POST", "upload.php");
    xhr.send(formData);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    resetUpload();
    uploadFile(file);
  };

  // 🔹 Función para simular clic en el input oculto
  const handleButtonClick = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  const handleSubmit = (formData) => {
    console.log("Formulario enviado:", formData);
  };

  


  return (
    <>
    <Container fluid className=" position-relative">
      {/* 🔹 Info extra arriba */}
      <div className="mb-3 p-3 border rounded bg-light">
        <h5>Datos del Prestador</h5>
        <p>
          <strong>Nombre:</strong> Juan Pérez
        </p>
        <p>
          <strong>Fecha actual:</strong> {new Date().toLocaleDateString()}
        </p>
        <p>
          <strong>Descripción:</strong> Aquí podés subir tu factura para
          procesarla.
        </p>
      </div>

      {/* 🔹 Botón personalizado */}
      <div className="mb-2">
        <Button
        className="btn btn-sm"
          variant="secondary"
          onClick={handleButtonClick}
          disabled={subiendo || archivoNombre}
        >
          <i className="bi bi-upload me-2"></i>
          Subir factura
        </Button>

        {/* 🔹 Input file oculto */}
        <input
          type="file"
          ref={inputFileRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </div>

      {/* 🔹 Mostrar nombre del archivo + cruz para eliminar */}
      {archivoNombre && (
        <div className="mt-2 d-flex align-items-center justify-content-between fade alert alert-primary show rounded p-2 shadow-sm ">
          <span className="text-truncate" style={{ maxWidth: "80%" }}>
            <i className="bi bi-file-earmark-text me-2"></i>
            {archivoNombre}
          </span>
          <i
            className="bi bi-x-circle text-danger fs-5"
            style={{ cursor: "pointer" }}
            onClick={resetUpload}
            title="Eliminar archivo"
          ></i>
        </div>
      )}

      {/* 🔹 Preview opcional */}
      {preview && (
        <div className="mt-3 text-center">
          <h5>Preview:</h5>
          <img
            src={preview}
            alt="Preview"
            style={{ maxWidth: "300px", maxHeight: "300px" }}
          />
        </div>
      )}

      {/* 🔹 Overlay durante subida */}
      {subiendo && (
        <div className="upload-overlay">
          <div className="upload-box">
            <h5>Subiendo archivo...</h5>
            <ProgressBar
              now={progreso}
              label={`${progreso}%`}
              animated
              striped
              className="my-3"
              style={{ width: "100%" }}
            />
            <Button variant="secondary" onClick={resetUpload}>
              Cancelar subida
            </Button>
          </div>
        </div>
      )}
    </Container>
    <Container fluid>
        <DynamicForm fields={DatosSubirFactura} onSubmit={handleSubmit} />

    </Container>
   
    </>
  );
};

export default FormSubir;


