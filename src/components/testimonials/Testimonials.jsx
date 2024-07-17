import "./testimonials.scss"

export default function Testimonials() {
  const data = [
    // {
    //   id: 1,
    //   name: "Tom Durden",
    //   title: "Senior Developer",
    //   img:
    //     "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   icon: "assets/twitter.png",
    //   desc:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    // },
    {
      id: 2,
    
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "As a budding ReactJS developer, I bring enthusiasm for crafting user-centric interfaces and solving complex challenges. My skills include creating reusable components, managing state efficiently, and integrating APIs seamlessly. Excited about contributing fresh perspectives and learning from experienced teams. Let's collaborate to build engaging, high-performance web applications together. ",
      featured: true,
    },
    // {
    //   id: 3,
    //   name: "Martin Harold",
    //   title: "CEO of ALBI",
    //   img:
    //     "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   icon: "assets/linkedin.png",
    //   desc:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    // },
  ];

  return (
    <div className="testimonial" id="testimonial">
      <h1>About Me</h1>
      <div className="container">
        {data.map(d=>(
        
        <div className={d.featured ? "card featured" : "card"}>
          <div className="center">
            {d.desc}
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            {/* <h4>{d.title}</h4> */}
          </div>
        </div>
        ))}
      </div>

    </div>
  )
}
