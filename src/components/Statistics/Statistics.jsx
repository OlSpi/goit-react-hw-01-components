import { StatisticItem } from '../StatisticItem/StatisticItem';
import css from './Satistics.module.css';

function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

export const Statistics = ({ data }) => {
  return (
    <>
      <section className={css.statistics}>
        <h2 className={css.title}>Upload stats</h2>

        <ul className={css.statList}>
          {data.map(({ id, label, percentage }, index) => {
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
