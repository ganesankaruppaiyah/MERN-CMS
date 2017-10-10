import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function ContactCard({contact, deleteContact}) {
  return (
    <div className="contentBox">
        <div className="boxHeader">
          <div>{contact.name.first}</div>
          <div>{contact.name.last}</div>
        </div>
        <div className="boxBody">
          <div>{contact.phone}</div>
          <div>{contact.email}</div>
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
  contact: PropTypes.object.isRequired
}
