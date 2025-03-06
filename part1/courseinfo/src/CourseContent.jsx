const CourseContent = ({ course }) => {
    if (!course || !course.parts) {
      return (
        <div>
          Course content not available
        </div>
      );
    }
  
    return (
      <div>
        {course.parts.map((part, index) => (
          <div key={index}>
            <h2>{part.title}</h2>
            <p>{part.content}</p>
            <p>exercises: {part.exercises}</p>
          </div>
        ))}
      </div>
    );
  };
  console.log("course content available");
  export default CourseContent;