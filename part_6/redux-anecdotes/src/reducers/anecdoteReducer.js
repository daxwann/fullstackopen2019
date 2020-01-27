// reducer

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE_ANECDOTE':
      const id = action.data.id;
      const anecdoteToChange = state.find(anecdote => anecdote.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      };
      return state.map(anecdote => {
        return anecdote.id !== id ? anecdote : changedAnecdote;
      });
    case 'INIT_ANECDOTES':
      return action.data;
    case 'ADD_ANECDOTE':
      const data = action.data;
      const newAnecdote = {
        content: data.content,
        id: data.id,
        votes: data.votes
      }
      return [...state, newAnecdote];
    default:
      return state;
  }
}

// action creaters

export const voteForAnecdote = (id) => {
  return ({
    type: 'VOTE_ANECDOTE',
    data: { id }
  });
};

export const addAnecdote = (data) => {
  return ({
    type: 'ADD_ANECDOTE',
    data: data
  })
};

export const initAnecdotes = (anecdotes) => {
  return ({
    type: 'INIT_ANECDOTES',
    data: anecdotes
  })
}

export default anecdoteReducer;

// Sample initial state

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]


// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

// const initialState = anecdotesAtStart.map(asObject)