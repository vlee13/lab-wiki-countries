import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountryDetail = (props) => {
  let country = countries.find((eachCountry) => {
    return eachCountry.cca3 === props.match.params.id;
  });

  return (
    <div>
      <h1>
        {country.name.common} {country.flag}
      </h1>
      <div>
        <li>Capital: {country.capital}</li>
        <li>
          Area: {country.area} km <sup>2</sup>{' '}
        </li>
        <li>
          {country.borders.map((border) => {
            let borderCountries = countries.find(
              (country) => country.cca3 === border
            );
            return (
              <ul>
                <li>
                  <Link to={`/${border}`}>{borderCountries.name.common}</Link>
                </li>
              </ul>
            );
          })}
        </li>
      </div>
    </div>
  );
};

export default CountryDetail;
