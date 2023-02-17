import PropTypes from 'prop-types';

import style from './Profile.module.css';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt="User avatar" className={style.avatar} />
        <p className={style.name}>{username}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.itemStats}>
          <span className={(style.spanItem, style.titleItem)}>Followers</span>
          <span className={style.spanItem}>{stats.followers}</span>
        </li>
        <li className={style.itemStats}>
          <span className={(style.spanItem, style.titleItem)}>Views</span>
          <span className={style.spanItem}>{stats.views}</span>
        </li>
        <li className={style.itemStats}>
          <span className={(style.spanItem, style.titleItem)}>Likes</span>
          <span className={style.spanItem}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
