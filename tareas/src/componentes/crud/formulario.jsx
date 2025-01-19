import { useState } from "react";

export const Formulario = ({ idEmpleado = "nuevoEmpleado",setRefresh }) => {
  const [mensajeError, setMensajeError] = useState("");
  const [formulario, setFormulario] = useState({
    idEmpleado: idEmpleado,
    nombre: "",
    correo: "",
    sueldo: 0,
    fecha: ""
  });

  const actualizarFormulario = (evento) => {
    const { name, value } = evento.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const presionarBoton = async (evento) => {
    evento.preventDefault();
    
    // Convertir el sueldo a número
    const datosAEnviar = {
      ...formulario,
      sueldo: parseFloat(formulario.sueldo),
      idEmpleado: idEmpleado === "nuevoEmpleado" ? 0 : parseInt(idEmpleado)
    };
    try {
      const url = "http://localhost:5263/api/Empleado";
      const method = idEmpleado === "nuevoEmpleado" ? "POST" : "PUT";
      
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosAEnviar),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.log('Error response:', errorData); 
        throw new Error(`Error ${response.status}: ${errorData}`);
      }   
      const data = await response.json();
      console.log('Respuesta exitosa:', data); 

     setRefresh(prev => !prev); // Actualizar después de éxito
  
    
      const modalElement = document.getElementById(idEmpleado);
      const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) {
        modalInstance.hide();
      }
    
      
      if (idEmpleado === "nuevoEmpleado") {
        setFormulario({
          idEmpleado: "nuevoEmpleado",
          nombre: "",
          correo: "",
          sueldo: 0,
          fecha: ""
        });
      }

    } catch (error) {
      setMensajeError(error.message);
      console.error("Error al realizar la solicitud:", error);
    } 
};

  return (
    <>
      <form onSubmit={presionarBoton} className="formulario">
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre Empleado
          </label>
          <input
            type="text"
            name="nombre"
            value={formulario.nombre}
            onChange={actualizarFormulario}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">
            Correo
          </label>
          <input
            type="email"
            name="correo"
            value={formulario.correo}
            onChange={actualizarFormulario}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sueldo" className="form-label">
            Sueldo
          </label>
          <input
            type="number"
            name="sueldo"
            value={formulario.sueldo}
            onChange={actualizarFormulario}
            className="form-control"
            required
            min="0"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fecha" className="form-label">
            Fecha
          </label>
          <input
            type="date"
            name="fecha"
            value={formulario.fecha}
            onChange={actualizarFormulario}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" >
          {idEmpleado === "nuevoEmpleado" ? "Crear Empleado" : "Actualizar Empleado"}
        </button>
      </form>
      {mensajeError && <div className="alert alert-danger">{mensajeError}</div>}
    </>
  );
};