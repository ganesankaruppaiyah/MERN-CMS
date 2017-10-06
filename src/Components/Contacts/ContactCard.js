import React from 'react';
import {Link} from 'react-router-dom';
export default function ContactCard({contact, deleteContact}) {
  return (
    <div className="contentBox">
        <div className="boxHeader">
          <p>{contact.name.first}</p>
          <p>{contact.name.last}</p>
        </div>
        <div className="boxBody">
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
        </div>
      <div className="boxFooter">
        <div className="btnRow">
          <Link to={`/contacts/edit/${contact._id}`} className="rowBtn greenBtn">Edit</Link>
          <button className="rowBtn redBtn" onClick={() => deleteContact(contact._id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}
ContactCard.propTypes = {
  contact: React.PropTypes.object.isRequired
}
