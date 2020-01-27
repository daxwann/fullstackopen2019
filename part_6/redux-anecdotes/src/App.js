import React, { useEffect } from 'react';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';
import anecdoteService from './services/anecdotes';
import Filter from './components/Filter';
import { connect } from 'react-redux';
import { initAnecdotes } from './reducers/anecdoteReducer';

const App = (props) => {
  const { notification, initAnecdotes } = props;

  useEffect(() => {
    anecdoteService
      .getAll()
      .then(res => initAnecdotes(res))
  }, []);

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      { notification.on && <Notification />}
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

const mapStateToProps = (state) => ({
  notification: state.notification,
})

const mapDispatchToProps = {
  initAnecdotes
}

export default connect(mapStateToProps, mapDispatchToProps)(App);