import React from 'react';
import axios from 'Axios';
import CowList from './CowList.jsx';

const App = () => {

  const getNames = async () => {
    try {
      const res = await axios.get("http://localhost:3000/");
      return res.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  return (
    <div>
      <div>
        <input placeholder="cow name"/>
        <input placeholder="cow description"/>
        <button>Submit</button>
      </div>
      <CowList const names={getNames}/>
    </div>
  )
};
export default App;