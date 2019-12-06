import React from 'react';
import TreeExample from './component/TreeExample'
import { dummyData } from './constants/tree'

import './App.css';

function App() {
  return (

    dummyData.map(function (data, index) {
      return < TreeExample dummyData={data} key={index} index={index}></TreeExample >;
    })
    // 
  );
}

export default App;
