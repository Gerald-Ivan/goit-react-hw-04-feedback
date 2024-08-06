import { Component } from "react"
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOption } from "./feedbackOption/feedbackOption";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  // for total of  state
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state; 
    return good + neutral + bad;
  };
  // for adding value to state
  handleClick = (type) => {
    this.setState ((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }))
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state; 
    const total = this.countTotalFeedback();
    const options = ['good', 'neutral', 'bad'];
    const feedback = this.countPositiveFeedbackPercentage();

    return (
      
      <>
      {/* button  */}
   
      <Section title="Please leave feedback">
      <FeedbackOption options={options} onLeavefeedback={this.handleClick}/>
      </Section>
      <Section title="Statistics">
       {total > 0 ? ( <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={feedback}/>) : (<Notification message="There is no feedback"/>
       
      )}
      
      
      </Section>
      </>

    )
  }
}
