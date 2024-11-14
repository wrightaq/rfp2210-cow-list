import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CowList from './CowList.jsx';

const App = () => {

  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/1")
      .then((res) => {
        const data = res.data;
        console.log("data:", data)
        console.log("Error:", res.err)
        setList([...list])
      });
  }, []);

  useEffect(() => {
    console.log("list:", list)
  })
  // const getNames = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:3000/")
  //     .then((res) => {
  //       console.log("data:", res.data)
  //       setList(res.data)
  //     });
  //     return res.data;
  //   } catch (err) {
  //     console.log(err);
  //     return err;
  //   }
  // };

  return (
    <div>
      <div>
        <input placeholder="cow name"/>
        <input placeholder="cow description"/>
        <button>Submit</button>
        {/* <ul>{list}</ul> */}
      </div>
      <CowList names={list}/>
    </div>
  )
};
export default App;