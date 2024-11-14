import React from 'react';
import axios from 'Axios';

const CowList = ({names}) => {
  console.log("names:", names)
  const cowNames = names;
  const cowNameList = cowNames.map((cowName) =>
    <li>{cowName}</li>
  );
  return (
    <ol>{cowNameList}</ol>
  );
};

export default CowList;