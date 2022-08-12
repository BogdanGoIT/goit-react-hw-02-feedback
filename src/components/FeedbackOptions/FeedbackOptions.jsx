export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        Object.keys(options).map(key => (
          <button key={key} onClick={() => onLeaveFeedback(key)}>{key}</button>
        ))
    );
}