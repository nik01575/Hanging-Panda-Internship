import React, { useState } from 'react'

const StatesInFbc = () => {
    let [state, setState] = useState("Add")
    function changeState (){
        if(state == "Add"){
            setState("Delete")
        }else{
            setState("Add")
        }
    }

    let [counter , setCounter] = useState(0);
    function increment(){
        if(counter < 10){
            setCounter(counter + 1)
        }else if(counter > 10){
            setCounter("Limit exceeded please refresh the page");
        }
    }
    function decrement(){
        if(counter > 0){
            setCounter(counter - 1);
        }
    }
    function reset(){
        setCounter(0)
    }
    function makeItInteresting(){
        setCounter("wow")
    }
  return (
    <div>
        <button onClick={changeState} >{state}</button>

        <div>
            <h1>{counter}</h1>
            <button onClick={increment} >Increment</button>
            <button onClick={decrement} >Decrement</button>
            <button onClick={reset} >Reset</button>
            <button onClick={makeItInteresting} >makeItInteresting</button>
        </div>


    </div>
  )
}

export default StatesInFbc