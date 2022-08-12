import { Notification } from "components/Notification/Notification";

export const Statistics = ({ good, bad, neutral, total, positivePercentage }) => { 
    return (

        total ?
            <div>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {total}</p>
                <p>Positive Feadback: {positivePercentage ? positivePercentage + '%' : 0} </p>
            </div> : <Notification message="There is no feedback" />
        
    );
    
}