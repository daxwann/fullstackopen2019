import React from "react";
import { voteForAnecdote } from "../reducers/anecdoteReducer";
import {
  setNotification,
  removeNotification
} from "../reducers/notificationReducer";
import { connect } from "react-redux";

const AnecdoteList = ({
  filteredAnecdotes,
  voteForAnecdote,
  setNotification,
  removeNotification
}) => {
  const getAnecdote = id => {
    const foundAnecdote = filteredAnecdotes.find(a => a.id === id);

    return foundAnecdote.content;
  };

  const vote = id => () => {
    voteForAnecdote(id);
    setNotification(getAnecdote(id));
    setTimeout(() => {
      removeNotification();
    }, 5000);
  };

  return (
    <div>
      {filteredAnecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            {' '}
            <button onClick={vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const filterAnecdotes = ({ anecdotes, filter }) => {
  if (!filter || filter.length === 0) {
    return anecdotes;
  }

  return anecdotes.filter(a => a.content.includes(filter));
};

const mapStateToProps = state => {
  return {
    filteredAnecdotes: filterAnecdotes(state)
  };
};

const mapDispatchToProps = {
  voteForAnecdote,
  setNotification,
  removeNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
