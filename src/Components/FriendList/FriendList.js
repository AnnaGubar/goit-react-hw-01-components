import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map(friend => (
        <li key={friend.id} className={s.item}>
          {friend.isOnline}
          {friend.isOnline ? (
            <span className={s.online}></span>
          ) : (
            <span className={s.offline}></span>
          )}

          <img
            className={s.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

// Statistics.propTypes = {
//   title: PropTypes.string,

//   //🔆 данный тип подходит для любого вида data
//   stats: PropTypes.any.isRequired,
// };

export default FriendList;
