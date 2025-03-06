import { useState } from "react";

const FirstCounter = () => {
    const [counter, setCounter] = useState(5);

return (
    <div>
        <p>Actual value: {counter}</p>
        <button onClick={() => setCounter(counter + 5)}>Increment</button>
        <button onClick={() => setCounter(counter - 5)}>Decrement</button>
    </div>
 );
};

export default FirstCounter;
