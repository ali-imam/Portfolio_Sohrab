import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import {
 
  technologiesPortfolio,
  projectsPortfolio,
  
  
  educationPortfolio,
  experiencePortfolio,
  
} from "../../data"

export default function Portfolio() {
  const [selected, setSelected] = useState("TechnologiesStack");
  const [data, setData] = useState([]);
  const list = [
     {
      id: "TechnologiesStack",
      title: "Technologies Stack",
    },
    {
      id: "Education",
      title: "Education",
    },
   
    {
      id: "Projects",
      title: "Projects",
    },
    {
      id: "Experience",
      title: "Experience",
    },
  


  ];
  useEffect(() => {

    switch (selected) {
      case "Education":
        setData(educationPortfolio);
        break;
      case "TechnologiesStack":
        setData(technologiesPortfolio);
        break;
      case "Projects":
        setData(projectsPortfolio);
        break;
      case "Experience":
        setData(experiencePortfolio);
        break;
    

      default:
        setData(educationPortfolio);

    }

  }, [selected])
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(item => (
          <PortfolioList title={item.title} active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map(d => (

          <div className="item">
            <img src={d.img}
              alt="" />
            <h3>{d.title}</h3>
          </div>

        ))}

      </div>

    </div>
  );
}
