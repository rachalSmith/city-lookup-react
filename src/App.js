import './App.css';
import AverageCalculation from './components/AverageCalculation';
import Header from './components/Header';
import InputField from './components/InputField';
import RadarChart from './components/RadarChart';

function App() {
  return (
    <div className="container">
      <Header />
      <InputField />
      <div className="data-container">
        <RadarChart />
        <AverageCalculation />
      </div>
    </div>
  );
}

export default App;
