
import "./menu.scss"
export default function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Intro</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}> 
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#work">Work</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials">About Me</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}> 
          <a href="#contact">Contact</a>
        </li>
      </ul>
      
    </div>
  )
}
