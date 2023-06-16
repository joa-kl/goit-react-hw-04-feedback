import {useState} from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1
    }))
  };
  
 const countTotalFeedback = () => {
  // const { good, neutral, bad } = this.state;
  return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            // options={Object.keys(this.state)}
            onClick={handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
 
};

export default App;