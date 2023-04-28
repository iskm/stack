const Header = (props) => {
  const header = props.name
  return (
    <h1>{header}</h1>
  )
}

const Part = (props) => {
  const name = props.name
  const exercises = props.exercises

  return (
    <p>{name} {exercises}</p>
  )
}

const Content = (props) => {
  //const object_1 = props.parts.parts[0]
  //const object_2 = props.parts.parts[1]
  //const object_3 = props.parts.parts[2]
  const parts = props.parts

  return (
    <>
      {parts.map((part) => {
        return (
          <Part name={part.name} exercises={part.exercises} />
      )})
      }
    </>
  )
}

const Total = (props) => {
  const parts = props.parts
  const initialValue = 0

  return (<p> Number of exercises {parts.reduce((sum, part) => {
     return sum += part.exercises

  }, initialValue)} </p>
  )
}

const Course = (props) => {
  const header = props.course.name
  const parts = props.course.parts
  return (
    <>
    <Header name={header} />
    <Content parts={parts} />
    <Total parts={parts} />
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
