import React from 'react'
import Child1 from '../ex2/Child1'

const Parent2 = () => {

    const users = [
        {
          id: 1,
          name: "Alice Johnson",
          email: "alice.johnson@example.com",
          profile: {
            age: 25,
            gender: "female",
            address: {
              street: "123 Main St",
              city: "New York",
              zip: "10001",
            },
          },
          hobbies: ["reading", "traveling", "coding"],
          isActive: true,
          roles: ["admin", "editor"],
        },
        {
          id: 2,
          name: "Bob Smith",
          email: "bob.smith@example.com",
          profile: {
            age: 30,
            gender: "male",
            address: {
              street: "456 Elm St",
              city: "San Francisco",
              zip: "94101",
            },
          },
          hobbies: ["gaming", "cycling"],
          isActive: false,
          roles: ["viewer"],
        },
        {
          id: 3,
          name: "Carol Brown",
          email: "carol.brown@example.com",
          profile: {
            age: 28,
            gender: "female",
            address: {
              street: "789 Oak St",
              city: "Chicago",
              zip: "60601",
            },
          },
          hobbies: ["painting", "dancing"],
          isActive: true,
          roles: ["editor"],
        },
        {
          id: 4,
          name: "David Wilson",
          email: "david.wilson@example.com",
          profile: {
            age: 35,
            gender: "male",
            address: {
              street: "321 Pine St",
              city: "Seattle",
              zip: "98101",
            },
          },
          hobbies: ["hiking", "photography"],
          isActive: true,
          roles: ["admin"],
        }
      ];

    //   console.log(users);
  return (
    <div>
        Parent2
        <Child1 users={users}/>
    </div>

  )
}

export default Parent2