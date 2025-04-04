import React from 'react'
import Child1 from './Child1';

const Parent = () => {

    let data = "Mai Parent's Data Hu";
    
  return (
    <div>
        <div>Parent : { data }</div>
        <Child1 data={data}/>
    </div>
  )
}

export default Parent