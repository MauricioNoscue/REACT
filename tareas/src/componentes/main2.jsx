import { useNavigate } from 'react-router-dom';
import mapa from '../assets/mapa.png'
import perfil from '../assets/perfil1.png'
import coleccion from '../assets/coleccion.png'


export const Main2 = () => {
    return (
      <main className="main">
          <Card titulo="CRUD C#" imagen={mapa} rutaff="pague2" descripcion="CRUD orientada hacia unos empleados"></Card>
          <Card titulo="tabla periodica" imagen={perfil} rutaff="pague3" descripcion="Una version de la tabla periodica pero esta vez hecha con componentes(aun no esta terminada)"></Card>
          <Card titulo="Juego Triki" imagen={coleccion} rutaff="pague3" descripcion="Un juego de triki que fue mi primer proyecto en react"></Card>
      </main>
    );
  };
  
const Targeta =({texto, imagen, rutaff})=>{
    const navigate = useNavigate();
    const handleNavigate = (ruta) => {
        navigate(ruta);
      };
    return(
       
            <div onClick={() => handleNavigate(`/${rutaff}`)} className="targeta">
            <img src= {imagen}alt="no esta"   className='imagen'/>
            <span className="textTarget">{texto}</span>
        </div>
       
        
    )
}


const Card = ({titulo, imagen, rutaff,descripcion})=>{
    const navigate = useNavigate();
  const handleNavigate = (ruta) => {
      navigate(ruta);
    };
  return(
    <div className="card " >
  <img src={imagen} className="card-img-top imagen " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{titulo}</h5>
    <p className="card-text">{descripcion}</p>
    <a onClick={() => handleNavigate(`/${rutaff}`)} className="btn btn-primary">Visitar</a>
  </div>
</div>
  )
}

{/* <nav>
           
            <Link to="/formulario">hola</Link>
          </nav>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/formulario" element = {<Formulario/>}/>
            </Routes> */}