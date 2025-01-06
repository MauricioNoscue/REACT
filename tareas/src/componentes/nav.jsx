export const Nav = () =>{
    return(
        <nav className="navM">
           <Item name ="hola"></Item>

           <Items></Items>
        </nav>
    )
}
const Item = ({name,imagen}) =>{
    return(
        <div className="item ">
            <img src="" alt="" />
            <span>{name}</span>
        </div>
    )
}
const Items = () =>{
    return(
       <section className="sectionItems"> 
        <Item name ="INSTAGRAM"></Item>
        <Item name ="NO SE"></Item>
        <Item name ="HOLA"></Item>
       </section>
    )
}