import { useState } from 'react'

import FeedbackOptions from './Feedback/FeedbackOptions/FeedbackOptions';
import Statistics from './Feedback/Statistics/Statistics';
import SectionTitle from './SectionTitle/SectionTitle';
import Notification from './Notification/Notification';
import Container from './Container/Container';

import 'index.css';

const feedbackOptions = ["good", "neutral", "bad"]

const App =()=> {
  const [feedbacks, SetFeedbacks] = useState({
  good: 0,
  neutral: 0,
  bad: 0
  })
  
const total = feedbacks.good + feedbacks.neutral + feedbacks.bad;

     const countPositiveFeedbackPercentage =() =>{
        if (!total) {
            return 0;
        }
        const value = feedbacks.good;
        const result = ((value / total) * 100).toFixed(0);
        return Number(result);
  }
  
  const leaveFeedback = name => {
    SetFeedbacks(prevState => {
      const value = prevState[name]
      
      return {...prevState, [name]: value +1}
  })
}

  const positiveFeedbackPersent = countPositiveFeedbackPercentage("good");

  return (
            <div className="wrapper">
            <SectionTitle title="Please leave feedback">
              <Container>
                <FeedbackOptions
                options={feedbackOptions}
                leaveFeedback={leaveFeedback} /> 
              </Container>
              
            </SectionTitle>
            
            {total !== 0 && (
              <SectionTitle title="Statistics">
                <Statistics
                  good={feedbacks.good}
                  neutral={feedbacks.neutral}
                  bad={feedbacks.bad}
                  total={total}
                  positivePercentage={positiveFeedbackPersent} />
              </SectionTitle>
            )}
                 
            
            {total === 0 && (
          <Notification message="There is no feedback" />
            )}
            </div>
        )
    }

export default App;


