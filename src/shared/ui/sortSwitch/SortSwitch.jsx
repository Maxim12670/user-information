import style from './sortSwitch.module.scss';
import PropTypes from 'prop-types';


const SortSwitch = ({ onClick, sortBy }) => {

  const handleClick = (e) => {
    onClick(sortBy, e.target.getAttribute('data-sort'));
  }

  return (
    <>
      <i
        className={`${style.btn} ${style['btn__arrow-up']}`}
        data-sort="increase"
        onClick={handleClick}></i>
      <i
        className={`${style.btn} ${style['btn__arrow-down']}`}
        data-sort="decreasing"
        onClick={handleClick}></i>
    </>
  )
}

SortSwitch.propTypes = {
  sortBy: PropTypes.string,
  onClick: PropTypes.func
}

export default SortSwitch;