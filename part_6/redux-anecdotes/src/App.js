import React from 'react';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';
import Filter from './components/Filter';
import { connect } from 'react-redux';

const App = (props) => {
  const { notification } = props;

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

export default connect(mapStateToProps)(App);