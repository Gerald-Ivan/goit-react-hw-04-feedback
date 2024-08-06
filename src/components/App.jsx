import { useState } from "react"
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOption } from "./feedbackOption/feedbackOption";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export const App = () =>{

  const [feedBack, setFeedBack ] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });


  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedBack; 
    return good + neutral + bad;
  };

  const handleClick = (type) => {
    // this.setState ((prevState) => ({
      // ...prevState,
      // [type]: prevState[type] + 1,
    // }))
    setFeedBack((prevState) =>  ({
      ...prevState,
      [type]: prevState[type] + 1,
    }))
  };
  const countPositiveFeedbackPercentage = () => {
    const { good } = feedBack;
    const total = countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  // render() {
    // const { good, neutral, bad } = this.state; 
    // const total = this.countTotalFeedback();
    // const options = ['good', 'neutral', 'bad'];
    // const feedback = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = feedBack; 
    const options = ['good', 'neutral', 'bad'];

    return (
      
      <>
      {/* button  */}
   
      <Section title="Please leave feedback">
      <FeedbackOption options={options} onLeaveFeedback={handleClick}/>
      </Section>
      <Section title="Statistics">
       {countTotalFeedback() > 0 ? ( <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}/>) : (<Notification message="There is no feedback"/>
       
      )}
      
      
      </Section>
      </>

    )
  }

