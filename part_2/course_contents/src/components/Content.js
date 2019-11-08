import React from 'react';
import Part from './Part';

const Content = ({content}) => {

  const listItems = (content) => {
    return (
      content.map((part) => {
        return <Part key={part.id} part={part} />;
      })
    )
  }

  const sumExercises = (content) => {
    return (
      content.reduce((sum, currentPart) => sum + currentPart.exercises, 0)
    )
  }

  return (
    <div>
      <ul>
        { listItems(content) }
      </ul>
      <strong>total of {sumExercises(content)} exercises</strong>
    </div>
  );
}

export default Content;