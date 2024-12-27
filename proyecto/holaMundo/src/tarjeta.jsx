import { useState } from 'React'

export function Tarjet({username, arroa, imagen }){

    const [estado, noSiguiendo] = useState(false)
 

    const text = estado ? 'siguiendo' :  'seguir'
    const estiloBotton = estado ? 'siguiendo' : 'article-twitter-button'

    const actualizar = ()=>{
        noSiguiendo (!estado)
    }
    
    return(
        <article className='article-twitter'>
            <header className='article-twitter-header'>
                <img 
                className='article-twitter-img'
                src={`https://unavatar.io/${imagen}` }
                 alt="la imagen" />
                <div className='article-twitter-div'>
                    <strong>{username}</strong>
                    <span className='article-twitter-span'>@{arroa}</span>
                </div>
            </header>
            <aside>
                <button className={estiloBotton} onClick={actualizar}>{text}</button>
            </aside>
        </article>
    )
}