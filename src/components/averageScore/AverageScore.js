import PropTypes from 'prop-types';

function AverageScore({ avScore }) {


  return (
    <div className="average-calculation">
      <p className="av-score-heading">Average Score</p>
      <div className="av-score" data-testid="av-score">{avScore}</div>
      <p className="info-link">
        Scores are out of 100 and are calculated on much more than the 6 categories to the left.<br />
        Want to know more?
      </p>
    </div>
  );
}

// PropTypes
AverageScore.propTypes = {
  avScore: PropTypes.number
}

export default AverageScore;