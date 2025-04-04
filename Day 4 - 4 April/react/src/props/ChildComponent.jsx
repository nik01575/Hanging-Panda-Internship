import React from 'react'

const ChildComponent = ({data, state, dbData}) => {
  return (
    <div>
        <h2>{data}</h2>
        <h2>{state}</h2>
        
        {
            dbData.map( ({id, ename, sal ,designation}) => {
                return (
                    <div key={id}>
                        <h5>{id} {ename} {sal} {designation}</h5>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ChildComponent