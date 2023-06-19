import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={css.friendList}>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <FriendListItem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
          );
        })}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
