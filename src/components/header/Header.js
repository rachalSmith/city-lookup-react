import arrow from '../../images/arrow.png'
import PropTypes from 'prop-types';


function Header({ executeScroll }) {


  return (
    <div className="hero-container">
        <div className="header">
          <h1>City Score</h1>
          <h5>Discover the city that suits you best</h5>
          <img
            onClick={executeScroll}
            src={arrow}
            alt="arrow"
           className="arrow"
          />
        </div>
    </div>
  );
}

// PropTypes
Header.propTypes = {
  executeScroll: PropTypes.func
}


export default Header;