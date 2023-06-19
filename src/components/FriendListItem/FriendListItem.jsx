import css from './FriendListItem.module.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <li className={css.item}>
        <span
          className={
            (isOnline = clsx(
              css.status,
              isOnline && css.green,
              !isOnline && css.red
            ))
          }
        ></span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
      </li>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
