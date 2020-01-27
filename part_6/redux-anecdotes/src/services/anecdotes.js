import axios from 'axios';

const ALL_ANECDOTES = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(ALL_ANECDOTES);
  return response.data;
}

const getId = () => (100000 * Math.random()).toFixed(0)

const createNew = async (content) => {
  const newAnecdote = {
    content,
    id: getId(),
    votes: 0
  }
  const response = await axios.post(ALL_ANECDOTES, newAnecdote);
  return response.data;
}

export default { getAll, createNew }
