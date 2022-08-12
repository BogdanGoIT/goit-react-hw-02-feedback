import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClick = (key) => {
    this.setState(prevState => ({
        [key]: prevState[key] + 1,
    }))
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, item) => total + item, 0);
  }




  render() {
    const { good, bad, neutral } = this.state;

    const total = this.countTotalFeedback();

    const totalFeadback = (good / total) * 100;
    // console.log(totalFeadback);



    // в.1
    // const { good, neutral, bad } = this.state;
    // const countTotalFeedback = good + neutral + bad;
    
    return (
      <>
      
        <Section title="Please live feadback" />
        <FeedbackOptions options={this.state} onLeaveFeedback={this.handleClick} />

        
        <Section title="Statistics" />
        <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={totalFeadback} />

        
      </>
        

    )
  }
}