import './App.css';
import AverageCalculation from './components/AverageCalculation/AverageCalculation';
import Header from './components/Header/Header';
import InputField from './components/InputField/InputField';
import RadarChart from './components/RadarChart/RadarChart';

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

        parsedData(data);
      }
      catch(error) {
        console.log('error', error);
      }
    }

    fetchCities();

    const parsedData = (data) => {

      console.log(data)

      const results = data.categories;

      const cleanData = results.map(scores => {
        return (
          <li>
            {[scores.name, scores.score_out_of_10]}
          </li>
        )
      })

      setRadarData(cleanData)
    }

  }, [])

   const [radarData, setRadarData] = useState();

  return (
    <div className="container">
      <Header />
      <InputField />
      <div className="data-container">
        <RadarChart data={radarData}/>
        <AverageCalculation />
      </div>
    </div>
  );
}

export default App;
