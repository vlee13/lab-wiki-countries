import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  return (
    <div>
      <li>
        <Link to={props.code}>{props.name}</Link>
      </li>
    </div>
  );
};

export default CountriesList;
