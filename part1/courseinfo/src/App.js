const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.desc}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.one + props.two + props.three}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>
      <Part part={part1} desc={exercises1} /> 
      <Part part={part2} desc={exercises2} /> 
      <Part part={part3} desc={exercises3} /> 
      <Total one={exercises1} two={exercises2} three={exercises3} /> 
    </div>
  )
}

export default App
