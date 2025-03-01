const Header = () => {
  const course = 'Half Stack application development';
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

//refactored the application following the exercise 1.3
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header />
      {course.parts.map((part, index) => (
        <div key={index}>
          <h2>{part.name}</h2>
          <p>Exercises: {part.exercises}</p>
        </div>
      ))}
      <h2>Total exercises: {course.parts.reduce((sum, part) => sum + part.exercises, 0)}</h2>
    </div>
  )
}

export default App