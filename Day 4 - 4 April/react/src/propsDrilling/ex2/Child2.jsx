import React from 'react'
import Child3 from './Child3'

const Child2 = ({users}) => {
    // console.log(users);
  return (
    <div>
        <div>Child2</div>
        <Child3 users={users}/>
    </div>

  )
}

export default Child2