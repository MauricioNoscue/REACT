import { useNavigate } from 'react-router-dom';
import mapa from '../assets/mapa.png'
import perfil from '../assets/perfil1.png'
import coleccion from '../assets/coleccion.png'


export const Main2 = () => {
    return (
      <main className="main">
          <Targeta texto="triqui" imagen={mapa} rutaff="pague2" />
          <Targeta texto="tabla periodica" imagen={perfil} rutaff="pague3" />
          <Targeta texto="fomulario pokemon" imagen={coleccion} />
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


{/* <nav>
           
            <Link to="/formulario">hola</Link>
          </nav>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/formulario" element = {<Formulario/>}/>
            </Routes> */}