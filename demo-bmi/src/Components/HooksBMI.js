import React,{useState} from "react";
function HooksBMI(){
    const[weight,setweight] = useState('')
    const[height,setheight] = useState('')
    const[msg,setmsg] = useState('')
    const[bbmi,setbbmi] = useState(0)
    const myFun = () =>{
        const bmi = (weight / (height * height))
        const bbmi = parseFloat(bmi);
        if(height>0 && weight>0){
            setbbmi(bbmi);
            if (bmi < 25) {
                setmsg('You are underweight')
              } else if (bmi >= 25 && bmi < 30) {
                setmsg('You are a healthy weight')
              } else {
                setmsg('You are overweight')
              }
        }
        else{
            setbbmi('NO!')
        }
        
    }
    return(
        <div>
            <h2>BMI Calculator</h2>
            <label>Weight</label><br/>
            <input type="number" placeholder="In kg" value={weight} onChange={(e)=>setweight(e.target.value)} ></input><br/>
            <label>Height</label><br/>
            <input type="number" placeholder="In cm" value={height} onChange={(e)=>setheight(e.target.value)}></input><br/>
            <button onClick={myFun}>Calculate</button>
            <p>{bbmi}</p>
            <p>{msg}</p>
        </div>
    )
}
export default HooksBMI;