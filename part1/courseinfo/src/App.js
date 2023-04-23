const Header = (props) => {
  const header = props.parts.name
  return (
    <h1>{header}</h1>
  )
}

const Content = (props) => {
  const object_1 = props.parts.parts[0]
  const object_2 = props.parts.parts[1]
  const object_3 = props.parts.parts[2]

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
  const one = props.parts.parts[0].exercises
  const two = props.parts.parts[1].exercises
  const three = props.parts.parts[2].exercises

  return (
    <p>Number of exercises {one + two + three}</p>
  )
}

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
      <Header parts={course}/>
      <Content parts={course}/>
      <Total parts={course}/>
    </div>
  )
}

export default App
