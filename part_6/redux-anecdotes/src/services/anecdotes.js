import axios from 'axios';

const GET_ALL_ANECDOTES = 'http://localhost:3001/anecdotes'

export const getAllAnecdotes = async () => {
  const response = await axios.get(GET_ALL_ANECDOTES);
  return response.data;
}
