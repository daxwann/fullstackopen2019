import React from 'react';

const Person = props => {
  const confirmDelete = () => {
    if (window.confirm(`Delete ${props.person.name}?`)) {
      props.deletePerson(props.person.id);
    }
  }

  return (
    <div>
      {props.person.name} {props.person.number} <button onClick={confirmDelete}>delete</button>
    </div>
  )
}

export default Person