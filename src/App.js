import './App.css';
import AverageCalculation from './components/AverageCalculation';
import Header from './components/Header';
import InputField from './components/InputField';
import RadarChart from './components/RadarChart';

import { useState, useEffect } from 'react';


function App() {

  useEffect(() => {

    const cityQuery = "manchester";
    const citiesUrl = `https://api.teleport.org/api/urban_areas/slug:${cityQuery}/scores/`

    //  Returns a raw array of data from API
    const fetchCities = async () => {
      try {
        const response = await fetch(citiesUrl);
        const data = await response.json();

        const results = data.categories;

        //const results = data.summary

        console.log(results);
      }
      catch(error) {
        console.log('error', error);
      }
    }

    fetchCities();


  }, [])

  // const [radarData, setRadarData] = useState({});


  return (
    <div className="container">
      <Header />
      <InputField />
      <div className="data-container">
        <RadarChart data={"data placeholder"}/>
        <AverageCalculation />
        <ul>
          <li>Housing</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
