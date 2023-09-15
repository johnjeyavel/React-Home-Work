
import React, { useContext } from 'react';
import Child1 from '../home-work/Child1';

const Child3 = () => {
  const { data, setData} = useContext(Child1);

  const updateData = () => {
    setData ('New data');
  };

  return (
    <div> 
      <p>Data from Context: {data}</p>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
};

export default Child3;

