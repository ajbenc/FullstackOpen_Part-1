import { useState } from "react";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text}: {value}
    </p>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const totalReviews = good + neutral + bad;
  const averageRating = totalReviews > 0 ? (good - bad) / totalReviews : 0;
  const goodPercentage = totalReviews > 0 ? (good / totalReviews) * 100 : 0;
  const neutralPercentage =
    totalReviews > 0 ? (neutral / totalReviews) * 100 : 0;
  const badPercentage = totalReviews > 0 ? (bad / totalReviews) * 100 : 0;

  if (totalReviews === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  } else {
    return (
      <div>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine
          text="Good Percentage"
          value={`${Math.min(goodPercentage, 100).toFixed(2)}%`}
        />
        <StatisticLine
          text="Neutral Percentage"
          value={`${Math.min(neutralPercentage, 100).toFixed(2)}%`}
        />
        <StatisticLine
          text="Bad Percentage"
          value={`${Math.min(badPercentage, 100).toFixed(2)}%`}
        />
        <StatisticLine
          text="Total Rating Percentage"
          value={`${averageRating.toFixed(2)}%`}
        />
      </div>
    );
  }
};
const ReviewOptions = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlePositiveReview = () => {
    const updateGood = good + 1;
    setGood(updateGood);
  };

  const handleNeutralReview = () => {
    const updateNeutral = neutral + 1;
    setNeutral(updateNeutral);
  };

  const handleNegativeReview = () => {
    const updateBad = bad + 1;
    setBad(updateBad);
  };

  return (
    <>
      <h3>Give feedback:</h3>
      <Button text="Good" onClick={handlePositiveReview} />
      <Button text="Neutral" onClick={handleNeutralReview} />
      <Button text="Bad" onClick={handleNegativeReview} />
      <div>
        <h3>Statistics:</h3>
        <Statistics good={good} neutral={neutral} bad={bad} />{" "}
        {/* passing the state variables as props */}
      </div>
    </>
  );
};

export default ReviewOptions;
