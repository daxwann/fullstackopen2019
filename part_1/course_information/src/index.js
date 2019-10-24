import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part.title} {props.part.exercises}</p>
    </>
  )
}

const Total = (props) => {
  return ( 
    <div>
      <p>Number of exercises {props.count}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content
        part1={
          {
            title: part1, 
            exercises: exercises1
          }
        }
        part2={
          {
            title: part2,
            exercises: exercises2
          }
        }
        part3={
          {
            title: part3,
            exercises: exercises3
          }
        }
      />
      <Total count={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))