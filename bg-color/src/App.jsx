import { useState } from 'react'

function App() {
  const [color, setColor] = useState("blue");

  return (
    <div style={{ backgroundColor: color ,width: '100vw', height: '100vh', display:"flex", justifyContent:"center",  alignItems:"flex-end"}}>
      <div style={{boxShadow: "5px 5px 8px grey" , backgroundColor:"white",margin: "20px", padding:"20px", borderRadius: "20%"}} >
      <button  onClick={()=>{setColor("red")}} style={{margin: "5px", padding:"5px", backgroundColor:"red"}}>RED</button>
      <button onClick={()=>{setColor("green")}} style={{margin: "5px", padding:"5px", backgroundColor:"green"}}>green</button>
      <button onClick={()=>{setColor("violet")}} style={{margin: "5px", padding:"5px", backgroundColor:"violet"}}>violet</button>
      <button onClick={()=>{setColor("black")}} style={{margin: "5px", padding:"5px", backgroundColor:"black"}}>black</button>
      <button onClick={()=>{setColor("orange")}} style={{margin: "5px", padding:"5px", backgroundColor:"orange"}}>orange</button>
      <button onClick={()=>{setColor("yellow")}} style={{margin: "5px", padding:"5px", backgroundColor:"yellow"}}>yellow</button>

      </div>
      
    </div>
  )
}

export default App
