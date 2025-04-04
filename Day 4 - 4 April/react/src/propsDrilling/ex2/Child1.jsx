import React from 'react'
import Child2 from './Child2'

const Child1 = ({users}) => {
    // console.log(users);
  return (
    <div>
        <div>Child1</div>
        <Child2 users={users}/>
    </div>
  )
}

export default Child1