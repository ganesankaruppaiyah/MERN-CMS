import React from 'react';
import {Link} from 'react-router-dom';

export default function UserCard({user, deleteUser}) {
  return (
    <div className="contentBox">
        <div className="boxHeader">
          <div>{user.name.first}</div>
          <div>{user.name.last}</div>
        </div>
        <div className="boxBody">
          <div>{user.phone}</div>
          <div>{user.email}</div>
        </div>
      <div className="boxFooter">
        <div className="btnRow">
          <Link to={`/users/edit/${user._id}`} className="rowBtn greenBtn">Edit</Link>
          <button className="rowBtn redBtn" onClick={() => deleteUser(user._id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}
