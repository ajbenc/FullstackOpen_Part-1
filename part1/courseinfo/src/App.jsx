import course from "./courseData";
import Header from "./Header";
import CourseContent from "./courseContent";
import TotalExercises from "./Total";

//added console.log to each module for checking the status of the passing data.
const App = () => {
  return (
    <div>
      <Header course={course} />
      <CourseContent course={course} />
      <TotalExercises parts={course.parts} />
    </div>
  );
};

export default App;
