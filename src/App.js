import { useEffect, useState } from "react";

export default function App (){
  
const[advice,setAdvice] = useState("");
const[count, setCount] = useState(0);


  async function getAdvice (){

    const findData = await fetch('https://api.adviceslip.com/advice');
    const data = await findData.json();
    // console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount((c) => c+1); //Number of times button clicked
  }
  useEffect(function(){getAdvice();},[]); //generates "Advices" just after reloading
  
    return (
      <div>
        <h1>{advice}</h1>
        <button onClick={getAdvice}>get Advice</button>
        <Message count={count}/>

      </div>
    );

    function Message(prop){
      return (
        <p>You got <strong>{prop.count}</strong> Advices !!</p>
      );
    }
  
}

