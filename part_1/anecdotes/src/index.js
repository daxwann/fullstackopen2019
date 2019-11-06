import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
	console.log("button");
	return (
  	<button onClick={props.handleClick}>next anecdote</button>
	)
}

const Display = (props) => {
	return (
  	<p>
			{props.randomAnecdote}
		</p>
	)
}

const App = (props) => {
  const [selected, setSelected] = useState(0)

	const setRandomSelection = (max, setSelected) => {
		const rand = Math.floor(Math.random() * max);
		setSelected(rand);
	}

  return (
    <div>
      <Display randomAnecdote={props.anecdotes[selected]} />
			<Button handleClick={() => setRandomSelection(props.anecdotes.length, setSelected)}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)