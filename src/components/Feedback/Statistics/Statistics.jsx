import styles from './statistics.module.css'
import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
<>
    <ul>
        <li>
        <p className={styles.text}>Good: {good}</p>
        </li>
        <li>
        <p className={styles.text}>Neutral: { neutral}</p>
        </li>
        <li>
        <p className={styles.text}>Bad: { bad}</p>
        </li>
        <li>
        <p className={styles.text}>Total: { total}</p>
        </li>
        <li>
        <p className={styles.text}>Positive Feedback: {positivePercentage} %</p>
        </li>
        </ul>
    </>
    )
}

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}