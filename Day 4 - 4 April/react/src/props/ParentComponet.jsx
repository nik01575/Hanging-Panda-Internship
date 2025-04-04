import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const ParentComponet = () => {

    let data = "Data From Parent"
    let dbData = [
        {id: 1 , ename: "john" , sal: 40000 , designation: "Tester"},
        {id: 2 , ename: "doe" , sal: 60000 , designation: "Dev"},
        {id: 3 , ename: "clark" , sal: 60500 , designation: "Tester"},
        {id: 4 , ename: "bruce" , sal: 80000 , designation: "Tester"},
        {id: 5 , ename: "tom" , sal: 90000 , designation: "Dev"},
    ];
    

    let [state, setState] = useState("Parent's Data")

    function changeState(){
        if(state == "Parent's Data"){
            setState("Changing Parent's Data")
        }else{
            setState("Parent's Data")
        }
    }

  return (
    <div>
        <h1>ParentComponet</h1>
        <button  onClick={changeState} >Change State</button>
        <ChildComponent data={data} state={state} dbData={dbData}/>
    </div>
  )
}

export default ParentComponet