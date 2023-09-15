
import React, { useState } from 'react';
import Child1 from '../home-work/Child1';

const Child2 = ({ children }) => {
  const [data, setData] = useState('Some initial data');

  return (
    <Child1.Provider value={{ data, setData }}>
      {children}
    </Child1.Provider>
  );
};

export default Child2;
    