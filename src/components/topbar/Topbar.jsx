import "./topbar.scss"

import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
        <a href="#intro" className="logo">KhanSohrab.</a>
        <div className="itemContainer">
          <PersonIcon className="icon"/>
          <span>+91-9372197692</span>
        </div>
        <div className="itemContainer">
          <MailOutlineIcon className="icon"/>
          <span>khansorab14@gmail.com</span>
        </div>
      </div>
        
          
      
      <div className="right">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>

        </div>
        

      </div>
</div>
</div>

  )
}
