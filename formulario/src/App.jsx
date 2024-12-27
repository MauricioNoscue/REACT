// import { useState, useEffect } from "react";
// import { Elemento } from "./componentes/Elemento";
// import "./App.css";

// const Fila = ({ children }) => {
//   return <div className="col-12 row filas-principales">{children}</div>;
// };

// const Seccion = ({ children }) => {
//   return <div className="seccion col-4 row">{children}</div>;
// };
// function App() {
//   const filas = [1, 2, 3, 4, 5, 6, 7];
//   const seccion = [1, 2, 3];
//   const element = [1, 2, 3, 4, 5, 6];
//   const [datos, setDatos] = useState([])
  
//  useEffect (()=>{
//   fetch('.elementos.json')
//   .then((response)=>{
//     if(!response.ok){
//       throw new Error(`error al cargar el archivo : ${response.status }`)
//     }
//     return response.json()
//   })
//   .then((data)=>{
//     setDatos(data)
//   })
//   .catch((error)=> console.error('hay un error',error))
//  },[]) // el arreglo es  si quiero especificaar si quiero que esto se ejecute cuando se cargue algun estado o comopnente 

//  let indiceJson = 0;
//   return (
//     <div className="containerTabla  ">
//       {filas.map((indexfila) => {
//         return (
//           <Fila key={indexfila}>
//             {seccion.map((indexSeccion) => {
//               return (
//                 <Seccion key={indexSeccion}>
//                   {element.map((indexElemento) => {
//                     const className = calcularVacio(indexfila, indexSeccion, indexElemento);  
//                     if( className !== "vacio" && datos[indiceJson]){
//                       const elemento =datos[indiceJson]
//                         indiceJson++
//                     }
//                       return(
//                         <Elemento 
//                         key={`${indexfila}-${indexSeccion}-${indexElemento}`}
//                         className={className}
                        
//                         ></Elemento>
//                        )
//                   })}
//                 </Seccion>
//               );
//             })}
//           </Fila>
//         );
//       })}
//     </div>
//   );
// }
// export default App;





// import { useState, useEffect } from "react";
// import { Elemento } from "./componentes/Elemento";
// import "./App.css";

// const Fila = ({ children }) => {
//   return <div className="col-12 row filas-principales">{children}</div>;
// };

// const Seccion = ({ children }) => {
//   return <div className="seccion col-4 row">{children}</div>;
// };

// function App() {
//   const filas = [1, 2, 3, 4, 5, 6, 7];
//   const seccion = [1, 2, 3];
//   const element = [1, 2, 3, 4, 5, 6];

//   const [datos, setDatos] = useState([]); // Estado para almacenar los datos del JSON
//   const [loading, setLoading] = useState(true); // Estado de carga
//   const [error, setError] = useState(null); // Estado para errores

//   useEffect(() => {
//     const fetchDatos = async () => {
//       try {
//         const response = await fetch('elementos.json'); // Cambia esto por la ruta de tu JSON
//         if (!response.ok) {
//           throw new Error(`Error al obtener los datos: ${response.status}`);
//         }
//         const data = await response.json();
//         setDatos(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDatos();
//   }, []);

//   if (loading) return <p>Cargando datos...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="containerTabla">
//       {filas.map((indexfila) => (
//         <Fila key={indexfila}>
//           {seccion.map((indexSeccion) => (
//             <Seccion key={indexSeccion}>
//               {element.map((indexElemento) => {
//                 const elementoDatos = datos[(indexfila - 1) * 18 + (indexSeccion - 1) * 6 + (indexElemento - 1)];
//                 return (
//                   <Elemento
//                     key={indexElemento}
//                     indexfila={indexfila}
//                     indexSeccion={indexSeccion}
//                     indexElemento={indexElemento}
//                     datos={elementoDatos || null} // Pasar los datos correspondientes
//                   />
//                 );
//               })}
//             </Seccion>
//           ))}
//         </Fila>
//       ))}
//     </div>
//   );
// }

// export default App;



import { useState, useEffect } from "react";
import { Elemento } from "./componentes/Elemento";
import { calcularVacio } from "./calcularVacio";
import "./App.css";

const Fila = ({ children }) => {
  return <div className="col-12 row filas-principales">{children}</div>;
};

const Seccion = ({ children }) => {
  return <div className="seccion col-4 row">{children}</div>;
};

function App() {
  const filas = [1, 2, 3, 4, 5, 6, 7];
  const seccion = [1, 2, 3];
  const element = [1, 2, 3, 4, 5, 6];
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch('/elementos.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error al cargar el archivo: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setDatos(data);
      })
      .catch((error) => console.error("Error en el fetch:", error));
  }, []);

  let indiceJSON = 0; // Índice para recorrer los datos del JSON

  return (
    <div className="containerTabla">
      <h1>PERIODIC TABLE CHART</h1>
      {filas.map((indexfila) => (
        <Fila key={indexfila}>
          {seccion.map((indexSeccion) => (
            <Seccion key={indexSeccion}>
              {element.map((indexElemento) => {
                const className = calcularVacio(indexfila, indexSeccion, indexElemento);

                if (className !== "vacio" && datos[indiceJSON]) {
                  const elemento = datos[indiceJSON];
                  indiceJSON++; // Solo avanzamos el índice si se asigna un elemento
                  return (
                    <Elemento
                      key={`${indexfila}-${indexSeccion}-${indexElemento}`}
                      elemento={elemento}
                      className={className}
                    />
                  );
                }

                return (
                  <Elemento
                    key={`${indexfila}-${indexSeccion}-${indexElemento}`}
                    className="vacio"
                  />
                );
              })}
            </Seccion>
          ))}
        </Fila>
      ))}
    </div>
  );
}

export default App;
