import { Component } from "react";

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
    const total = this.countTotalFeedback();

    // в.1
    // const { good, neutral, bad } = this.state;
    // const countTotalFeedback = good + neutral + bad;
    
    return (
      <div>
        <h2>Please live feadback</h2>

        {Object.keys(this.state).map(key => (
          <button key={key} onClick={() => this.handleClick(key)}>{key}</button>
        ))}
        
        <h2>Statistics</h2>

          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {total}</p>

      </div>
    )
  }
}