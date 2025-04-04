import React from 'react'
import Child2 from './Child2'

const Child1 = ({data}) => {
  return (
    <div>
        <div>Child1 : {data}</div>
        <Child2 data ={data}/>
    </div>
  )
}

export default Child1