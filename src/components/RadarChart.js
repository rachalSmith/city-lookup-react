function RadarChart({ data }) {
    return (
      <div className="radar-chart">
        <p>Radar Chart</p>
        <p data-testid="data">{data}</p>
      </div>
    );
  }

  export default RadarChart;