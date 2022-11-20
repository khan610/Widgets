import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    const search = async () => {
      await axios.get('salkjdkalsjdkl');
    };

    search();
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="frield">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Search;
