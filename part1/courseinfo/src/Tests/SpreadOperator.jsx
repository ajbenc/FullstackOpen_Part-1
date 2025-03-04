import { useState } from "react";

const History = (props) => {
  if (props.allClicks.length === 0) {
    console.log('props value is', props);
    return (
      <div>
        <p>the app is used by pressing the buttons</p>
      </div>
    )
  }
  return (
    <div>
      <p>Button press history: {props.allClicks.join(' ')}</p>
    </div>
  )
}

const Button = ({onClick, text}) => (
  <button onClick = {onClick}>
    {text}
  </button>
)

const ClickOptions = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right) 
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    const updatedRight = right + 1
    setRight(updatedRight);
    setTotal(updatedRight + left);
  };

  return (
    <div>
      <br />
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <History allClicks={allClicks}/>
      <p>Total: {total}</p>
    </div>
  );
};

export default ClickOptions;
