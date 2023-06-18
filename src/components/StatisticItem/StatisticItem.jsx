import css from './StatisticItem.module.css';

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
