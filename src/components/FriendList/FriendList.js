import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
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
