import React,{useState} from "react";
function HooksBMI(){
    const[weight,setweight] = useState('')
    const[height,setheight] = useState('')
    const[msg,setmsg] = useState('')
    const[bmi,setbmi] = useState(0)
    const myFun = () =>{
        const bmi = ((weight / (height * height))).toFixed(2)
        if(height>0 && weight>0){
            setbmi(bmi);
            if (bmi < 25) {
                setmsg('You are underweight')
              } else if (bmi >= 25 && bmi < 30) {
                setmsg('You are a healthy weight')
              } else {
                setmsg('You are overweight')
              }
        }
        else{
            setbmi('Enter Valid Numbers!')
        }
        
    }
    return(
        <div className="container">
            <h2 className="Name">BMI Calculator</h2>
            {/* <label className="label">Weight</label><br/> */}
            <input type="text" className="input" placeholder="Enter Weight(in kg)" value={weight} onChange={(e)=>setweight(e.target.value)} required></input><br/><br></br>
            {/* <label>Height</label><br/> */}
            <input type="text" className="input" placeholder="Enter Height(in m)" value={height} onChange={(e)=>setheight(e.target.value)} required></input><br/><br></br>
            <button className="calculate" onClick={myFun}>CALCULATE</button>
            <p className="msg">Your BMI is : {bmi}</p>
            <p className="msg">{msg}</p>
        </div>
    )
}
export default HooksBMI;