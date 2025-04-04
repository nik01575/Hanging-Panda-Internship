import React from "react";

const Child3 = ({ users }) => {
  // console.log(users);
  return (
    <div>
      <h2>Child3 :</h2>
      {users.map((users) => {
        {
          /* console.log(users) */
        }
        let { id, name, email, hobbies, profile, roles } = users;
        return (
          <div key={id}>
            <div>
              {id} {name} {email} {hobbies}
            </div>
            <div>
              <ul>
                {hobbies.map((ele, i) => {
                  return <li key={i}>{ele}</li>;
                })}
              </ul>
            </div>
            <div>
              <ul>
                {roles.map((ele, i) => {
                  return <li key={i}>{ele}</li>;
                })}
              </ul>
            </div>

            <div>
              {profile.age}, {profile.gender} {profile.address.street}
              {profile.address.zip}
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default Child3;
