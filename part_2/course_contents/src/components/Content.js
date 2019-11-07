import React from 'react';
import Part from './Part';

const Content = ({content}) => {

  const listItems = (content) => {
    console.log(content);
    return (
      content.map((part) => {
        return <Part key={part.id} part={part} />;
      })
    )
  }

  return (
    <ul>
      { listItems(content) }
    </ul>
  );
}

export default Content;