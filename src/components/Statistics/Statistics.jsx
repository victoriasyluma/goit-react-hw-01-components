import PropTypes from 'prop-types';
import { getComplementaryColors } from '../../utils/colors';
import styles from './Statistics.module.scss';

export const Statistics = props => {
  const { title, stats } = props;

  const { color, contrastColor } = getComplementaryColors();

  return (
    <section className={styles.statistics}>
      {title && <h2 className="title">{title}</h2>}
      <ul className={styles.stat_list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            style={{ backgroundColor: color, color: contrastColor }}
            className={styles.item}
            key={id}
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
