import { useState } from "react";
const GreetingsButton = () => {
    const [message, setMessage] = useState('');
    const [clickCount, setClickCount] = useState(0);
    const [timesGreeting, setTimesGreeting] = useState(0);

    const greet = () => {
      setClickCount(prevCount => prevCount +1);
      setTimesGreeting(prevCount => prevCount +1);   
        if (clickCount % 2 === 0) {
        setMessage('Sup dawg');
     } else {
        setMessage('');
     }
    };
    return (
        <div>
            <h3>times greeted: {timesGreeting}</h3>
        <br/>
        <button onClick={greet}>Greet</button>
        {message && <h1>{message}</h1>}
        </div>
    );
};

export default GreetingsButton;