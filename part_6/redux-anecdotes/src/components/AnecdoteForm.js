import React from 'react';
import { addAnecdote } from '../reducers/anecdoteReducer';
import { connect } from 'react-redux';

const AnecdoteForm = (props) => {
  const addNote = (event) => {
    event.preventDefault();
    const content = event.target.content.value;
    props.addAnecdote(content);
    event.target.content.value = '';
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addNote}>
        <input name="content" />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  addAnecdote
}

export default connect(null, mapDispatchToProps)(AnecdoteForm);