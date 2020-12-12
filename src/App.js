import React, { useState } from "react";
import "./styles.css";




export default function App() {
  const[result,setResult]=useState('')



  function onChangeHandler(){
  userInput=event.target.value
  
  }

  function btnClickHandler(){
   
      userDob=userInput.split("/")
      date= userDob[0]
      month=userDob[1]   
   console.log(date,month);
   if(isNaN(date)||isNaN(month)){
      var newresult="invalid input"
      setResult(newresult)
   }else if(date<=0||date>31||month<=0||month>31){
     var newresult="invalid input "
     setResult(newresult)
   }
   if(date==1){
    var newresult="Birth date neither prime nor composite"
    setResult(newresult)
 }
 if(date==2){
  var newresult="Birth date is prime number"
  setResult(newresult)
} else{
   for(var i=2;i<date;i++){
    if(date%i==0){
      var newresult="Birth date is not prime number"
      setResult(newresult)
      break;
    }else{
      var newresult="Birth date is prime number"
      setResult(newresult)
    }
   }
 }
   
  }
  
  


  return (
    <div className="App">
      <input onChange={onChangeHandler} className="inputBox" placeholder="Enter your DOB in DD/MM format"/>
      <br/>
      <button onClick={btnClickHandler} className="btnCheck">Check </button>
      <div className="outputDiv">
          <p>{result}</p>
      </div>
    </div>
  );
}
