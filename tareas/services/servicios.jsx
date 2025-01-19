import { Formulario } from "../src/componentes/crud/formulario"

export const Eliminar = async (id, setRefresh) => {
    try {
      const response = await fetch(`http://localhost:5263/api/Empleado/${id}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error(`Error ${response.status}: No se pudo eliminar el empleado.`);
      }
  
      const data = await response.json();
      console.log("Empleado eliminado con éxito:", data);
      
      // Trigger para volver a renderizar
      setRefresh(prev => !prev);
      
      return data;
    } catch (error) {
      console.error("Error al realizar la solicitud de eliminación:", error);
      throw error;
    }
  };

export const ModalEmpleado =({id="nuevoEmpleado",setRefresh})=>{
 
     return(
        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby={`${id}-label`} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
            Agregar nuevo Empleado {id}
              <h1 className="modal-title fs-5" id={`${id}-label`}>Modal title </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
  
              {
                  <Formulario idEmpleado ={id} setRefresh={setRefresh} ></Formulario>
              }
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
     )
}

export  const TraerEmpleados = async () => {
  try {
    const respuesta = await fetch("http://localhost:5263/api/Empleado", {
      method: "GET",
    });

    if (!respuesta.ok) {
      throw new Error(`Error ${respuesta.status}: No se pudo obtener la lista de empleados.`);
    }

    const data = await respuesta.json();
    return {
      data: data,
      mensaje: " "
    }
  } catch (error) {
    return {
      mensaje: "No se pudo obtener la lista de empleados.",
      data: [],
      error: error
    }
  }
};
