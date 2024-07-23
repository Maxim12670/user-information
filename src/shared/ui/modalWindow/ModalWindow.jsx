import style from './modalWindow.module.scss';
import PropTypes from 'prop-types';

const ModalWindow = ({ user, isActive, onClick }) => {

  return (
    <div className={`${style.wrapper} ${isActive ? style['active'] : ''}`}>
      <div className={style.container}>
        {user == null ? "not found" :
          <>
            <div
              className={style['close-btn']}
              onClick={onClick}>
            </div>
            <ul className={style.list}>
              
              <li><span>initials:</span>{user.initials}</li>
              <li><span>age:</span>{user.age}</li>
              <li><span>address:</span>{user.address}</li>
              <li><span>height:</span>{user.height}</li>
              <li><span>weidht:</span>{user.weidht}</li>
              <li><span>phoneNumber:</span>{user.phoneNumber}</li>
              <li><span>email:</span>{user.email}</li>
            </ul>
          </>}
      </div>
    </div>
  );
};

ModalWindow.propTypes = {
  user: PropTypes.object,
  isActive: PropTypes.bool,
  onClick: PropTypes.func
}

export default ModalWindow;