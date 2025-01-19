

import {  Eliminar,ModalEmpleado,TraerEmpleados } from "../../../services/servicios";

import { useEffect,useState } from "react";


export const TablaEmpleado = () => {
    const [empleados, setEmpleados] = useState([]); 
    const [mensajeError, setMensajeError] = useState("");
    const [refresh, setRefresh] = useState(false);

useEffect(() => {
    // Crear una función asíncrona dentro del useEffect
    const cargarEmpleados = async () => {
      const { data, mensaje } = await TraerEmpleados(); // Esperar el resultado de la función
      setEmpleados(data);
      setMensajeError(mensaje);

    };
    
    cargarEmpleados();
  }, [refresh]);


  const handleDelete = async (id) => {
    try {
      await Eliminar(id, setRefresh);
    } catch (error) {
      // Manejo del error
    }
  };

  return (
    <div className="tablaEmpleados">
      <table className="table margen">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Sueldo</th>
            <th scope="col">Fecha</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((empleado) => (
            <tr key={empleado.idEmpleado}>
              <th scope="row">{empleado.idEmpleado}</th>
              <td>{empleado.nombre}</td>
              <td>{empleado.correo}</td>
              <td>{empleado.sueldo}</td>
              <td>{empleado.fecha}</td>

              <td> <button type="button" className="btn btn-danger" onClick={() => handleDelete (empleado.idEmpleado)}>Eliminar</button></td>
              <td><button type="button" className="btn btn-success"  data-bs-toggle="modal" data-bs-target={`#${empleado.idEmpleado}`}>Actualizar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalEmpleado id="nuevoEmpleado" setRefresh={setRefresh} />
      {empleados.map((empleado)=>(
        <ModalEmpleado key={empleado.idEmpleado} id={empleado.idEmpleado} setRefresh={setRefresh} ></ModalEmpleado>
      ))}
    </div>
  );
}; 


