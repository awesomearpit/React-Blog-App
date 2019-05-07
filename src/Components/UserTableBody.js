import React from "react";
import { Link } from "react-router-dom";

const UserTableBody = props => {
  return (
    <tbody>
      {props.userData.map((data, index) => {
        return (
          <tr key={index}>
            <th scope="row">{data.id}</th>
            <td>{data.name}</td>
            <td>{data.company.name}</td>
            <td>
              <Link to={`/posts/${data.id}`}>All Posts</Link>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default UserTableBody;
