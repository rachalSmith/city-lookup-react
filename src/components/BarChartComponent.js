import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTyes from 'prop-types';

function BarChartComponent({ barChartData }) {

    return (

        <div className="bar-chart-box">

            <h3 className="text">Average Height of Species</h3>

            {/*  If copying demo from recharts change width and aspect to make it work  */}
            <ResponsiveContainer width="90%" aspect={2}>
                <BarChart
                    width={500}
                    height={300}
                    data={barChartData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid  horizontal="true" vertical="" stroke="#243240" />
                    <XAxis dataKey="name"
                        tick={{
                            fill:"#fff"
                        }}
                    />
                    <YAxis
                        tick={{
                            fill:"#fff"
                        }}
                        unit="cm"
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#2e4355",
                            color: "#fff",
                            borderRadius: "5px"
                        }}
                        itemStyle={{
                            color: "#fff"
                        }}
                    />
                    <Legend />
                    <Bar dataKey="averageHeight" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

        </div>
    );
}

export default BarChartComponent;

BarChartComponent.propTyes = {
    BarChartData: PropTyes.number.isRequired
  }
