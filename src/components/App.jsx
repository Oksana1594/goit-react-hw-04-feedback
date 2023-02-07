import { useState } from 'react';

import FeedbackOptions from './Feedback/FeedbackOptions/FeedbackOptions';
import Statistics from './Feedback/Statistics/Statistics';
import SectionTitle from './SectionTitle/SectionTitle';
import Container from './Container/Container';
import Notification from './Notification/Notification';

import 'index.css';

const App = () => {
  const [good, setGoodFeedbacks] = useState(0);
  const [neutral, setNeutralFeedbacks] = useState(0);
  const [bad, setBadFeedbacks] = useState(0);

  const feedbackOptions = ['good', 'neutral', 'bad'];
  const total = good + neutral + bad;

  const leaveFeedback = option => {
    switch (option) {
      case 'good':
        setGoodFeedbacks(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutralFeedbacks(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBadFeedbacks(prevBad => prevBad + 1);
        break;
      default:
        throw new Error("There isn't such option");
    }
  };

  const countPositiveFeedbackPercentage = () => {
    if (!total) {
      return 0;
    }
    const value = good;
    const result = ((value / total) * 100).toFixed(0);
    return Number(result);
  };

  const positiveFeedbackPersent = countPositiveFeedbackPercentage('good');

  return (
    <div className="wrapper">
      <SectionTitle title="Please leave feedback">
        <Container>
          <FeedbackOptions
            options={feedbackOptions}
            leaveFeedback={leaveFeedback}
          />
        </Container>
      </SectionTitle>

      {total !== 0 && (
        <SectionTitle title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedbackPersent}
          />
        </SectionTitle>
      )}

      {total === 0 && <Notification message="There is no feedback" />}
    </div>
  );
};

export default App;
