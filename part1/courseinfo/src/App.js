const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Content = (props) => {
  const object_1 = props.parts[0]
  const object_2 = props.parts[1]
  const object_3 = props.parts[2]

  return (
    <p>
      {object_1.name} {object_1.exercises}
      <br />
      {object_2.name} {object_2.exercises}
      <br />
      {object_3.name} {object_3.exercises}
    </p>
  )
}

const Total = (props) => {
  const one = props.parts[0].exercises
  const two = props.parts[1].exercises
  const three = props.parts[2].exercises

  return (
    <p>Number of exercises {one + two + three}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header name={course}/>
      <Content parts={parts} />
      <Total parts={parts} /> 
    </div>
  )
}

export default App
