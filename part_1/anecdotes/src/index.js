import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
	return (
  	<button onClick={props.handleClick}>{props.text}</button>
	)
}

const Display = (props) => {
	return (
  	<p>
			{props.content}
		</p>
	)
}

const Heading = (props) => {
  return (
    <h2>
      {props.content}
    </h2>
  )
}

const App = (props) => {
  const count = props.anecdotes.length
  const getRandomNum = (max) => Math.floor(Math.random() * max)

  // hooks
  const [selected, setSelected] = useState(getRandomNum(count))
  const [votes, setVotes] = useState(new Array(count).fill(0))

  // callbacks
	const setRandomSelection = (max, selected, setSelected) => {
    return (
      () => {
        let rand = getRandomNum(max);

        while (rand === selected) {
          rand = getRandomNum(max);
        }

        setSelected(rand);
      }
    )
	}

  const addVote = (selected, votes, setVotes) => {
    return (
      () => {
        const copy = [...votes];
        copy[selected] += 1;
        setVotes(copy);
      }
    )
  }

  // functions
  const mostVotes = votes => votes.indexOf(Math.max(...votes));

  // render
  return (
    <div>
      <Heading content="Anecdote of the day" />
      <Display content={props.anecdotes[selected]} />
      <Display content={"has " + votes[selected] + " votes"} />
      <Button handleClick={addVote(selected, votes, setVotes)} text="vote"></Button>
			<Button handleClick={setRandomSelection(count, selected, setSelected)} text="next anecdote"/>
      <Heading content="Anecdote with the most votes" />
      <Display content={props.anecdotes[mostVotes(votes)]} />
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