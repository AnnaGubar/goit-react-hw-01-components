import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li key={id} className={s.item}>
          <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

// FriendList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//     }),
//   ),
// };

// Statistics.propTypes = {
//   title: PropTypes.string,

//   //🔆 данный тип подходит для любого вида data
//   stats: PropTypes.any.isRequired,
// };

export default FriendList;
