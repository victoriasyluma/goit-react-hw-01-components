import PropTypes from 'prop-types';
import styles from './FriendList.module.scss';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span
        className={styles.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>

      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
