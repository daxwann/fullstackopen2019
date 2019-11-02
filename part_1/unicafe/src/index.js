import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = props => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Feedback = ({handleClick, values}) => {
  const incrementValue = (val, setter) => {
    return () => setter(val + 1);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={incrementValue(values.good, handleClick.setGood)} text="good" />
      <Button handleClick={incrementValue(values.neutral, handleClick.setNeutral)} text="neutral" />
      <Button handleClick={incrementValue(values.bad, handleClick.setBad)} text="bad" />
    </div>
  )
}

const Statistic = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
}

const Statistics = ({ values }) => {
  const sum = (values) => {
    return values.good + values.neutral + values.bad
  }

  const average = (values) => {
    const total = sum(values);

    if (total === 0)
      return 0
    else
      return (values.good - values.bad) / sum(values)
  }

  const positive = (values) => {
    const total = sum(values);

    if (total === 0)
      return "0%"
    else
      return values.good / sum(values) * 100 + "%"
  }

  return (
    <div>
      <h2>statistics</h2>
      <Statistic text="good" value={values.good} />
      <Statistic text="neutral" value={values.neutral} />
      <Statistic text="bad" value={values.bad} />
      <Statistic text="all" value={sum(values)} />
      <Statistic text="average" value={average(values)} />
      <Statistic text="positive" value={positive(values)} />
    </div>
  )
}
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Feedback handleClick={
          {
            setGood: setGood,
            setNeutral: setNeutral,
            setBad: setBad 
          }
        } values={
          {
            good: good,
            neutral: neutral,
            bad: bad
          }
        }/>
      <Statistics values={
        {
          good: good,
          neutral: neutral,
          bad: bad
        }
      }/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)