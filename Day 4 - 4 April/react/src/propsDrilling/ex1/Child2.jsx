import React from 'react'
import Child3 from './Child3'

const Child2 = ({data}) => {
  return (
    <div>
        <div>Child2 : {data}</div>
        <Child3 data={data}/>
    </div>
  )
}

export default Child2