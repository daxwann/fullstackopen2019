import React from 'react';
import { voteForAnecdote } from '../reducers/anecdoteReducer';
import { setNotification, removeNotification } from '../reducers/notificationReducer';

const AnecdoteList = ({ store }) => {
  const { anecdotes } = store.getState();

  const getAnecdote = (id) => {
    const foundAnecdote = anecdotes.find(a => a.id === id);

    return foundAnecdote.content;
  }

  const vote = (id) => () => {
    store.dispatch(voteForAnecdote(id));
    store.dispatch(setNotification(getAnecdote(id)));
    setTimeout(() => {
      store.dispatch(removeNotification());
    }, 5000);
  };

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList;