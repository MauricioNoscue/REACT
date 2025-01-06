

import { useState } from 'react'

export const Formulario = ()=>{
  const [nombre, setInput] = useState(" ")
  const [mensajeConfirmacion, setMensaje] = useState( " ")
  const [memsajeError, setMensajeError] = useState(" ")

  const presionarBotto = async (eventoBotton) => {
    eventoBotton.preventDefault(); 
    
    try {
      const response = await fetch("https://localhost:7103/Pokemon/buscar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre }),
      });
  
      const data = await response.json(); 

      if(data.mensaje.includes("el pokemon que tienes es ")){
        setMensaje(data.datos)
        setMensajeError(" ")
      }else{
        setMensajeError(data.mensaje)
        setMensaje(" ")
      }
      console.log("Respuesta del servidor:", data);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };
  const actualizarInput = (eventoInput)=>{
    setInput(eventoInput.target.value)
  }
    return(
      <>
        <form onSubmit={presionarBotto} className='formulario'>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Busca tu pokemón</label>
            <input type="text" value={nombre} onChange={actualizarInput} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" >Aqui podemos ver si el pokemón existe</div>
          </div>
          <button type="submit" className="btn btn-primary">buscar</button>
        </form>

    {mensajeConfirmacion && <div>{mensajeConfirmacion}</div>}
    {memsajeError && <div>{memsajeError}</div>}
      </>
      

    )
}



// <form onSubmit={presionarBotto}   className='formulario'>
// <label htmlFor="">ingrese el nombre del pokemon</label>
// <input type="text" value={nombre} onChange={actualizarInput} />
// <button type="submit">buscar</button>
// </form>