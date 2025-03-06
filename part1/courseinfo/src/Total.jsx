const TotalExercises = ({ parts }) => {
    const calculateTotalExercises = () => {
      try {
        return parts?.reduce((sum, part) => {
          return sum + (part.exercises || 0);
        }, 0) || 0;
      } catch (error) {
        console.error("Error calculating total exercises:", error);
        return 0;
      }
    };
  
    const totalExercises = calculateTotalExercises();
  
    return (
      <div>
        <p>
          Number of exercises: {totalExercises}
        </p>
      </div>
    );
  };
  
  console.log("display total exercise");
  
  export default TotalExercises;