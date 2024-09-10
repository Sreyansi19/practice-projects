import { useCallback, useEffect, useState } from 'react'


function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed,setnumberAllowed] = useState(false);
  const [charAllowed,setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*~?/()_+{}[]";

    for (let i = 0;i < length ; i++){
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  },[length, numberAllowed,charAllowed,setPassword])

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <div style={{width:"100vw", height:"100vh",display:'flex', justifyContent:"center"}}>
      <div style={{margin:"50px", padding:"20px", backgroundColor:"grey", borderRadius:"20px",display:'flex', justifyContent:"center"}}>
        password
        {/* <input type='text' placeholder='password' value={password} readOnly style={{margin:"20px", padding:"10px",borderRadius:"25px",backgroundColor:"white", color:" #DC4D01",outline:'none',border: 'none', fontWeight:"bolder",fontSize:"18px"}}>
        </input>
        <button style={{backgroundColor:"blue" ,marginLeft:"-93px" ,padding:"10px", width:"80px",height :"55px",margin:"20px",outline:"none",borderRadius:"25px"}}>Copy</button>
         */}
      </div>
    </div>
   
  )
}

export default App
