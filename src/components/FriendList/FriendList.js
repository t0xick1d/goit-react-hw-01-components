import PropTypes from 'prop-types';
import style from './FriendList.module.css';

import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={style.friendList}>
      {friends.map(e => {
        return (
          <FriendListItem
            key={e.id}
            avatar={e.avatar}
            name={e.name}
            isOnline={e.isOnline}
          />
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
