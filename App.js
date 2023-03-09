
import './App.css';

function App() {
  return (
    <div className="App">
      <Details 
   access ="✓"
   img="https://th.bing.com/th/id/OIP.gm5C_Q2AiN_bb9G0UL_96gHaJG?w=153&h=188&c=7&r=0&o=5&dpr=1.1&pid=1.7"
   name="selva" 
   batch="B43WD"
  />
   <Details 
   access="❌"
   img="https://iheartcraftythings.com/wp-content/uploads/2021/04/How-to-Draw-Cartoon-Face-%E2%80%93-Featured-Image.jpg"
   name="siva" batch="B42WD"/>
   <Details
    access="✔"
    img="https://easydrawingguides.com/wp-content/uploads/2019/08/how-to-draw-an-anime-boy-face-featured-image-1200.png"
    name="muthu" batch="B41WD"/>
     
    </div>
  );
}

export default App;



function Details (props){
  return(
    <div className="card">
      <img src={props.img} alt="name"/>
      <h1><span>{props.access}</span>{props.name}</h1>
      <p>{props.batch}</p>
    </div>
  )
}