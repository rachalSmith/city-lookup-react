import PropTypes from 'prop-types';

function Instructions({ totalCities }) {


  return (
    <div className="instructions" >
      <p>Search {totalCities} cities from across the world
         and use quality of life data to decide which city suits you best. <br />
         The higher the score, the better the city.
      </p>
    </div>
  );
}

// PropTypes
Instructions.propTypes = {
  totalCities: PropTypes.number
}

export default Instructions;