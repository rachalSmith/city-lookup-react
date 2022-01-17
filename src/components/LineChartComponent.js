import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PropTyes from 'prop-types';

function LineChartComponent({ lineChartData }) {

   return (

    <div className="line-chart-box">

      <h3 className="text">Diameter of planets and length of one day in hours</h3>

      {/*  If copying demo from recharts change width and aspect to make it work  */}
      <ResponsiveContainer width="100%" aspect={2}>
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid  horizontal="true" vertical="true " stroke="#243240" />
          <ZAxis type="string "dataKey="name" name="Planet name" />
          <XAxis type="number" dataKey="diameter" name="Planet diameter"
            tick={{
              fill:"#fff"
            }}
            label={{
              value: 'Diameter (x106)',
              position: 'bottom',
              offset: 7,
              fill: "#fff"
            }}
          />
          <YAxis type="number" dataKey="day" name="hours per day"
            tick={{
              fill:"#fff"
            }}
            label={{
              value: 'Length of day (hrs)',
              angle: -90,
              position: 'top',
              dy: 130,
              dx: -15,
              fill: "#fff"
            }}
          />
          <Tooltip contentStyle={{
              backgroundColor: "#2e4355",
              color: "#fff",
              borderRadius: "5px"
            }}
            itemStyle={{
              color: "#fff"
            }}
          />
          <Scatter name="name" data={lineChartData} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>

    </div>
  );
}

export default LineChartComponent;

LineChartComponent.propTyes = {
  LineChartData: PropTyes.number.isRequired
}
