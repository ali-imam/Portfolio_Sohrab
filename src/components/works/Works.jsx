import { useState } from "react";
import "./works.scss"
export default function Works() {
  const [currectSlide,setCurrentSlide] = useState(0)
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "GYM WEBSITE",
      desc:
        "Gym Website That Gives User To Comprehensive Information,Interactive Features,Services and Programs,and Store For Shopping ",
      img:
         "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        img2:"https://miro.medium.com/v2/resize:fit:1358/1*kymQR1cbK7cGIdFNb_aMdQ.jpeg",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Cake Delivery App ",
      desc:
        "In This project to enhance the user experience of cake shop's e-commerce App,introduced a new feature that allows customers to sort cakes based on reviews and ratings in descending order. This means that users can easily find the highest-rated cakes with just a few clicks.",
             img:
         "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        img2:"https://cdn.dribbble.com/users/2290677/screenshots/15253505/media/83031143e21b9d19dab05f6263e9a851.png?resize=400x0",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Note ToDo App",
      desc:
        "A note-taking app with WhatsApp reminders offers users a convenient way to manage their tasks and receive timely notifications.",
      
                  img:
         "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        img2:"https://phandroid.com/wp-content/uploads/2017/07/google-keep.png",
    },
  ];

  const handleClick =(way)=>{
    way === "left" ? setCurrentSlide(currectSlide > 0 ? currectSlide -1 : 2) :
    setCurrentSlide(currectSlide<data.length -1 ? currectSlide + 1 : 0)
  };
  return (
    
    <div className="works" id="works">
       
      <div className="slider" style={{transform:`translateX(-${currectSlide *100}vw)`}}>
        
    { data.map((d)=>(
      <div className="container">
        
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon}></img>
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                    <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src={d.img2}></img>
            </div>
          </div> 
        </div>
          ))}
      </div>
  
      
      <img src="assets/arrow.png" className="arrow left" alt=""  onClick={()=>handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" alt=""  onClick={()=>handleClick("right")} />

    </div>

)
}
