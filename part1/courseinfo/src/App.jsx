const Header = () => {
  const course = 'Half Stack application development'

  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises} 
    </p>
  )
}

const Content = () => {
 const parts = [
  { name: 'Fundamentals of React', exercises: 10 },
  { name: 'Using props to pass data', exercises: 7 },
  { name: 'State of a component', exercises: 14 }
 ]

 const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
      <Total total={totalExercises} />
    </div>
  )
}

const Total = ({total}) => {
return (
 <p>Number of exercises {total}</p>  
)
}

const App = () => {
  return (
  <>
  <Header />
  <Content />
  </>
  )
}

export default App