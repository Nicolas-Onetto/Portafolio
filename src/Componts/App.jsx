import React, {useState, useEffect, useRef} from "react"
import moon from "./../assets/icons8-moon-symbol-96.png"
import me from "./../assets/me2.jpg"
import developer from  "./../assets/developer.png"
import linkedin from "./../assets/icons8-linkedin-500.png"
import github from "./../assets/icons8-github-500.png"
import gmail from "./../assets/icons8-gmail-nuevo-500.png"
import imag_productlist from "./../assets/Product_List.png"
import img_Film_Data from "./../assets/camptura_info_film.png"

function App() {
  let [width, setwidth] = useState(window.innerWidth)
  let reftext_presentation = useRef([])
  let array_text_presentation = ["I am","an", "enthusiastic", "developer", "passionate", "aboout", "creating", "innovative", "solutions", "whit", "technology", "Always", "looking","for", "new", "challenges", "and", "learning"];
  let array_buttons_selecc = ["React", "HTML", "NODE","CSS", "MysQl", "Sass", "Javasccript"]
  let [text_presentation, settext_presentation] = useState(array_text_presentation)
  let [button_links, setbutton_links] = useState(array_buttons_selecc)
  let [button_true, setbutton_true] = useState([]);
  let refbutton = useRef([]);
  let lim = [55, 40, 48,28, 60, 25, 40, 49, 35, 50, 25, 30, 53, 32, 50, 52, 30, 60]
  let [size, setsize] = useState(lim);
  lim = [{"name" : "Product-List", "img": `${imag_productlist}`, "lenjuaje" : [ `${array_buttons_selecc[0]}`, /*`${array_buttons_selecc[6]}`,*/ `${array_buttons_selecc[3]}`], "link": `https://www.google.com/search?q=temperature&rlz=1C1ONGR_enAR1108AR1108&oq=temp&gs_lcrp=EgZjaHJvbWUqDAgDEAAYQxiABBiKBTIGCAAQRRg5MgwIARAAGEMYgAQYigUyDAgCEAAYQxiABBiKBTIMCAMQABhDGIAEGIoFMg0IBBAAGIMBGLEDGIAEMhIIBRAAGEMYgwEYsQMYgAQYigUyBggGEEUYPTIGCAcQRRg80gEIMzE5OWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8`}, {"name" : "Film Data", "img": `${img_Film_Data}`, "lenjuaje" : [ `${array_buttons_selecc[0]}`, `${array_buttons_selecc[6]}`, `${array_buttons_selecc[3]}`], "link": ``}]
  let [project, setproject] = useState(lim)
  let [copproject, setcopproject] = useState(lim)
  let [contador, setcontador] = useState(0)

  
  window.addEventListener("resize", ()=>{
    setwidth(window.innerWidth)
    if(reftext_presentation.current){
      reftext_presentation.current.forEach((value, i)=>value.style.fontSize  = width<=1025 ? `clamp(1rem,  ${size[i]-size[i]/2.5}px, 30rem)`: `clamp(1rem,  ${size[i]}px, 30rem)`)
    }
  })

  useEffect(()=>{
    if(reftext_presentation.current){
      reftext_presentation.current.forEach((value, i)=>value.style.fontSize  = width<=1025 ? `clamp(1rem,  ${size[i]-size[i]/2.5}px, 30rem)`: `clamp(1rem,  ${size[i]}px, 30rem)`)
    }
  },[])


  let Button = (index) => {  
    if (button_links[index]) {
      let cop = [...button_true];
      if (cop.includes(button_links[index])) {
        let i = cop.indexOf(button_links[index]);
        cop.splice(i, 1);
        setbutton_true(cop);
        refbutton.current[index].style.color = "#ccc";
        refbutton.current[index].style.fontSize = "clamp(1rem, 4vw, 24px)";
      } else {
        cop.push(button_links[index]);
        setbutton_true(cop);
        refbutton.current[index].style.color = "#C4FF71";
        refbutton.current[index].style.fontSize = "clamp(1rem, 4.5vw, 30px)";
      }
    }
  };
  

  useEffect(()=>{
    if(contador>=1){
      let cant = button_true.length; 
      if (cant > 0) {
        let filteredProjects = copproject.filter((proj) => {
          return button_true.every((trues) => proj.lenjuaje?.includes(trues));
        });
        setproject(filteredProjects);
      } else {
        setproject(copproject);
      }
    } else{
      setcontador(contador+1)
    }
  },[button_true])


  return (
    <>
    <div className="content">
      <header>
        {
          width>718 ?
            <div className="box_menu_title">
              <h1 className="name">Nicolas Onetto</h1>
            </div>
           : null
        }
        
        <div className="content_links">
          <div className="box-links">
            <a href="#content-presentation"><h4 className="link">About Me</h4></a>
            <a href=""><h4 className="link">Proyects</h4></a>
            <a href=""><h4 className="link">Contact Me</h4></a>
          </div>
          <button type="button" className="content-dark">
              <img src={moon} alt="Moon" className="moon"/>
          </button>
        </div>
      </header>

      <article>
        <div className="content-presentation" >
          <div className="box_photo_me">
            <img src={me} alt="Me" className="me" />
          </div>
          <div className="box-presentation">
            <div className="box-developer">
              <h2 className="title">Developer Web</h2>
            </div>
            
            <div className="text-presentation">
              <h2>
                {
                  text_presentation.map((value,i)=>(
                    <span key={value} className={value.replace(" ", "_")} ref={el=>reftext_presentation.current[i]=el}>{value} </span>
                  ))
                }
                
              </h2>
            </div>
          </div>
        </div>
        <div className="content_about_me" id="content-presentation">
          <div className="content_text_about_me">
              <div className="box_title_about_me">
                <h2 className="hello">Hello there!!!</h2>
                <h3 className="nico">I am Nico</h3>
              </div>
              <div className="box_text_about_me">
                <h4 className="text">I am a web developer specialized in front-end, trained as a computer technician and currently studying Computer Engineering. I did an internship at Axum, where I developed a website using React and its libraries, strengthening my experience in dynamic and modern projects.</h4>
              </div>
          </div>
          <div className="content_photo_about_me">
            <img src={developer} alt="Developer" className="developers" />
          </div>
        </div>
        <div className="content_box_proyects">
          <div className="box_title_proyects">
            <h2 className="projects">Projects and</h2>
            <h2 className="projects">Practices</h2>
          </div>
          <div className="content_proyect_search">
            <div className="box_search_proyects">
              {
                button_links.map((value, index)=>(
                  <div key={value} className="content_button" onClick={()=>Button(index)}>
                    <h4 className="class" id={value} ref={(el)=> refbutton.current[index] = el }>
                      {value}
                    </h4>
                    
                  </div>
                ))
              }
            </div>
            <div className="content_proyects">
              {
                project.map((value, index)=>(
                  <div className="box_pryect" key={index}>
                    <div className="box_img_proyect">
                      <img src={value.img} alt="Proyect" className="img_proyect"/>
                    </div>
                    <div className="title_proyect_name">
                      <a href={value.link} className="proyect_name"><h4 className="proyect_name">{value.name}</h4></a>
                    </div>
                    
                  </div>
                ))
              }
              
            </div>
          </div>
        </div>
      </article>
      <footer>
              <div className="gap"></div>
              <a href="" className=""><img src={github} alt="" className="" /></a>
              <a href="" className=""><img src={linkedin} alt="" className="" /></a>
              <a href="" className=""><img src={gmail} alt="" className="" /></a>
      </footer>  
    </div>
    
    </>
  )
}

export default App
