export const Elemento = ({ elemento, className }) => {
    if (className !== "vacio" && elemento) {
      return (
        <div
          className={`elemento col-2 ${className}`}
          data-bs-toggle="modal"
          data-bs-target={`#${elemento.símbolo}`} 
        >
          <span className="numero">{elemento.número_atómico}</span>
          <span className="simbolo">{elemento.símbolo}</span>
          <span className="masa">{elemento.masa_atómica}</span>
          <span className="nombre">{elemento.nombre}</span>
        </div>
      );
    }
  
    return <div className={`elemento col-2 ${className}`}></div>;
  };
  