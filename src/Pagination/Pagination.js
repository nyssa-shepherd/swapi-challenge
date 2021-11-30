import leftArrow from '../images/left-arrow.png';
import rightArrow from '../images/right-arrow.png';
import './Pagination.css';
import People from "../People/People";
import PropTypes from 'prop-types';

const Pagination = ({ setPageNumber, pageNumber }) => {
  return (
      <div className='pagination-container'>
        <button
            className='pagination-button'
            onClick={() => setPageNumber(-1, 1)}>
          <img src={ leftArrow } className='button-img' />
        </button>
        <p className='page-number'>{ pageNumber }</p>
        <button
            className='pagination-button'
            onClick={() => setPageNumber(1, 4)}>
          <img src={ rightArrow } className='button-img' />
        </button>
      </div>
  )
};

Pagination.propTypes = {
  setPageNumber: PropTypes.func,
  pageNumber: PropTypes.number,
};

export default Pagination;
