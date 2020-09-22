import React, { useState, useEffect } from 'react';
import countries from './countries.json';
import CountryDetail from './components/CountryDetail';
import CountriesList from './components/CountriesList';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  let [countryList, setCountryList] = useState([]);

  useEffect(() => {
    async function getData() {
      let res = await axios.get(`https://countries.tech-savvy.tech/countries
    `);
      setCountryList(res.data);
    }
    getData();
  }, []);

  const displayCountries = () => {
    return countries.map((eachCountry) => {
      return (
        <CountriesList code={eachCountry.cca3} name={eachCountry.name.common} />
      );
    });
  };

  return (
    <div>
      <NavBar />
      <Switch>
        <Route
          exact
          path="/:id"
          render={(props) => <CountryDetail {...props} />}
        />
      </Switch>
      {displayCountries()}
    </div>
  );
};

export default App;
