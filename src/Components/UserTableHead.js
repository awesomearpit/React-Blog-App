import React from "react";

const UserTableHead = props => {
  return (
    <thead>
      <tr>
        {props.headElements.map(el => {
          return <th scope="col">{el}</th>;
        })}
      </tr>
    </thead>
  );
};

export default UserTableHead;
