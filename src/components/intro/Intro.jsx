import { useEffect, useRef } from "react"
import "./intro.scss"
import { init } from "ityped"

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
      init(textRef.current,
      {   showCursor: true,
          backDelay: 1500,
          backSpeed:50,
          strings: ["Reactjs Developer", "Web Designer","Web Developer!","React Native Developer"],
          //cursorChar: "|",

     
      });

  }, [])

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgcontainer">
          <img src="assets/profile.png"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, i'm</h2>
          <h1>Khan Sohrab</h1>
          <h3>
            i'm a <span ref={textRef}></span>
          </h3>
         
        </div>
        <a href="#portfolio">
          <img src="assets/down.png"></img>
        </a>
        
      </div>
    </div>



  )
}
