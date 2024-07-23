import style from './myInput.module.scss';
import PropTypes from 'prop-types';

const MyInput = ({className, onChange}) => {

  return (
    <>
      <input 
        type='text' 
        placeholder='Поиск...' 
        className={`${className} ${style.input}`}
        onChange={(e) => onChange(e)}/>
    </>
  )
};

MyInput.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func
}

export default MyInput;