import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onclick}>
      {props.text}
    </button>
  )
}

const Display = (props) => {
  return (
    <p>{props.text} {props.count}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onclick={() => setGood(good + 1)} text="good" />
      <Button onclick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onclick={() => setBad(bad + 1)} text="bad" />
      <h2>statistics</h2>
      <Display text="good" count={good} />
      <Display text="neutral" count={neutral} />
      <Display text="bad" count={bad} />
    </div>
  )
}

export default App
