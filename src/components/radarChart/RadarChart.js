import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


function RadarChartComponent({ categoryData, cityName }) {


  return (
    <div className="radar-chart-container">
      <p className="radar-chart-title">
        Scores for {cityName === "" || undefined ? 'City' : cityName}
      </p>
      { categoryData &&
      <ResponsiveContainer width="99%" aspect={2} className="radar-chart">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={categoryData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="score" stroke="#7E7193" fill="#7E7193" fillOpacity={0.6} />
      </RadarChart>
      </ResponsiveContainer>
      }
    </div>
  );
}


  export default RadarChartComponent;