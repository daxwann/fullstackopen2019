import React from 'react';
import { addAnecdote } from '../reducers/anecdoteReducer';
import { connect } from 'react-redux';
import anecdoteService from '../services/anecdotes';

const AnecdoteForm = (props) => {
  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.content.value;
    event.target.content.value = '';
    props.addAnecdote(content);
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