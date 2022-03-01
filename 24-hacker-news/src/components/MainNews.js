import React, { useState } from 'react';
import axios from 'axios';

const MainNews = () => {
  const [popular, setPopular] = useState([]);

  const fetchData = async () => {
    const data = await axios.get();
  };
  return <></>;
};

export default MainNews;
