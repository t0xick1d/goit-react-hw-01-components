import PropTypes from 'prop-types';
import style from './FriendList.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={style.itemList}>
      <span className={isOnline ? style.isActive : style.status}>
        {isOnline}
      </span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
}

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
