import React from 'react';
import CowList from './CowList.jsx';

const App = () => {

  return (
    <div>
      <div>
        <input placeholder="cow name"/>
        <input placeholder="cow description"/>
        <button>Submit</button>
      </div>
      <CowList />
    </div>
  )
};
export default App;