
import './form.css'

export function Formulario(){
    return (
        <section className="sec-from">
            <form action="" className="form">
                <label htmlFor="" className="label-from">nombre</label>
                <input type="text" name="nombre" id="nombre" className="input-form"/>
                <label htmlFor="" className="label-from"></label>
                <input type="text" name="apellido" id="apellido" className="input-form"/>
                <button  className="button-from" type="submit"></button>
            </form>
        </section>
    )
}