import {useState} from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

const App = () => {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  const handleFeedback = option => {
    setValues(prevValue => {
      return ({
        ...prevValue, [option]: prevValue[option] + 1
      })
    })
  }
  // const handleFeedback = option => {
  //   if (option === "good") {
  //     setGood(prevGood => prevGood + 1);
  //   } else if (option === "neutral") {
  //     setNeutral(prevNeutral => prevNeutral + 1);
  //   } else {
  //     setBad(prevBad => prevBad + 1);
  //   }
  // }
 
 const countTotalFeedback = () => {
  return values.good + values.neutral + values.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((values.good / countTotalFeedback()) * 100);
  };

  
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(values)}
          // options={['good', 'neutral', 'bad']}
          onClick={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={values.good}
            neutral={values.neutral}
            bad={values.bad}
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