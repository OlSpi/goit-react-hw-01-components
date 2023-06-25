import { Profile } from 'components/Profile/Profile';
import { StatisticItem } from '../StatisticItem/StatisticItem';
import css from './Satistics.module.css';
import PropTypes from 'prop-types';

function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

export const Statistics = ({ data, title }) => {
  return (
    <>
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.statList}>
          {data.map(({ id, label, percentage }) => {
            const randomColor = generateRandomColor();
            return (
              <StatisticItem
                key={id}
                label={label}
                percentage={percentage}
                color={randomColor}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
};

Profile.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
};
