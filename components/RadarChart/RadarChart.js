import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


function RadarChartComponent({ categoryData }) {
    return (
      <div className="radar-chart">
        <p>For: CITY</p>
        { categoryData &&
        <ResponsiveContainer width="100%" aspect={2}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={categoryData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
      }
      </div>
    );
  }

  export default RadarChartComponent;