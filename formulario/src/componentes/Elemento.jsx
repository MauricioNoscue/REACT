
// import { calcularVacio } from "../calcularVacio"

// export const Elemento = ({indexfila,indexSeccion, indexElemento }) => {
//     const className = calcularVacio(indexfila,indexSeccion, indexElemento)
//     if (className !== "vacio") {
//       return (
//         <div className={`elemento col-2 `}>
//           <span className="numero">2</span>
//           <span className="simbolo">f</span>
//           <span className="masa">dsds</span>
//           <span className="nombre">dsds</span>
//         </div>
//       )
//     }else{
//       return(
//         <div className={`elemento col-2 ${className}`}></div>
//       )
//     }
   
//   }

//   import { calcularVacio } from "../calcularVacio";

//   export const Elemento = ({ indexfila, indexSeccion, indexElemento, datos }) => {
//     const className = calcularVacio(indexfila, indexSeccion, indexElemento); 
//     if (className !== "vacio" && datos) {
//       return (
//         <div className={`elemento col-2`}>
//           <span className="numero">{datos.número_atómico}</span>
//           <span className="simbolo">{datos.símbolo}</span>
//           <span className="masa">{datos.masa_atómica}</span>
//           <span className="nombre">{datos.nombre}</span>
//         </div>
//       );
//     } else {
//       return <div className={`elemento col-2 ${className}`}></div>;
//     }
//   };
  

export const Elemento = ({ elemento, className }) => {
    if (className !== "vacio" && elemento) {
      return (
        <div className={`elemento col-2 ${className}`}>
          <span className="numero">{elemento.número_atómico}</span>
          <span className="simbolo">{elemento.símbolo}</span>
          <span className="masa">{elemento.masa_atómica}</span>
          <span className="nombre">{elemento.nombre}</span>
        </div>
      );
    }
  
    return <div className={`elemento col-2 ${className}`}></div>;
  };
  