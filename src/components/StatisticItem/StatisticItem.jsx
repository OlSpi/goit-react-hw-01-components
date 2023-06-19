import css from './StatisticItem.module.css';
import PropTypes from 'prop-types';

export const StatisticItem = ({ label, percentage, color }) => {
  const itemStyle = {
    backgroundColor: color,
  };
  return (
    <>
      <li className={css.item} style={itemStyle}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
      </li>
    </>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};
