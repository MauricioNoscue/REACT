import './App.css'
import{Tarjet} from './tarjeta'
import{Formulario} from './form/form'
export function App (){
    return (
        <>
            <div className='componente1'>
                <Tarjet  username = 'Maauro' arroa = 'mauronoscue' imagen ='midudev' />
                <Tarjet username = 'Maauro Noscue' arroa = 'mauronoscue3' imagen ='mauro'/>
                <Tarjet username = 'Maauro Noscue' arroa = 'mauronoscue3' imagen ='messi'/>
                <Tarjet username = 'Maauro Noscue2' arroa = 'mauronoscue5'/>
                <Tarjet username = 'Maauro Noscue3' arroa = 'mauronoscue33'/>
            </div>
            <div className='formulario'>
            <Formulario/>

            </div>
        </>
    )
}


