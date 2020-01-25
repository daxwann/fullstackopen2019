import React from 'react';
import { voteForAnecdote } from '../reducers/anecdoteReducer';
import { setNotification, removeNotification } from '../reducers/notificationReducer';

const AnecdoteList = ({ store }) => {
  const { anecdotes, filter } = store.getState();

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

  const filterAnecdotes = () => {
    if (!filter || filter.length === 0) {
      return anecdotes;
    }

    return anecdotes.filter(a => a.content.includes(filter));
  }

  return (
    <div>
      {filterAnecdotes().map(anecdote =>
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