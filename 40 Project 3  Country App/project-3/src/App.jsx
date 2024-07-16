import { useState, useEffect } from "react";

import Countries from "./component/Countries";
import "./component/app.css";
import Search from "./component/Search";
import Country from "./component/Country";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filetrCountries, setfilterCountries] = useState(countries);

  const url = "https://restcountries.com/v3.1/all";

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setfilterCountries(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemoveCountry = (name) => {
    const filter = filetrCountries.filter((countries) => countries.name.common !== name);
    return setfilterCountries(filter);
  };

  const handleSearch = (searchValue) => {
    const value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setfilterCountries(newCountries);
  };

  return (
    <>
      <h2 style={{fontSize:'3rem', padding:'0.7rem',fontWeight:'400'}}>Country App</h2>
      <Search onSearch={handleSearch} />
      {isLoading && <h2>Data is loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {countries && <Countries countries={filetrCountries} onHandleRemoveCountry={handleRemoveCountry} />}
    </>
  );
}

export default App;
