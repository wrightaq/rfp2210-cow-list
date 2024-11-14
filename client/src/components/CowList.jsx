import React from 'react';
import axios from 'axios';

const CowList = ({ names }) => {
  console.log("names:", names)
  const nameList = names.map((name) =>
    <li>{name}</li>
  );
  return (
    <ol>{nameList}</ol>
  );
};

export default CowList;