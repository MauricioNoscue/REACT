import { useState, useEffect } from "react";
import { Elemento } from "./componentes/Elemento";
import { calcularVacio } from "./calcularVacio";
import { Modal } from "./componentes/modal";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min.js";
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

  let indiceJSON = 0; 

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
                  indiceJSON++; 
                  return (
                    <Elemento
                      key={`${indexfila}-${indexSeccion}-${indexElemento}`}
                      elemento={elemento}
                      className={className}
                    >
                    </Elemento>
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
      {datos.map((elemento) => (
        <Modal key={elemento.símbolo} id={elemento.símbolo} />
      ))}
    </div>

 
  );
}

export default App;
