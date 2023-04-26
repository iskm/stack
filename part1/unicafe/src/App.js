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

const Statistics = (props) => {
  const good = props.good
  const bad = props.bad
  const neutral = props.neutral
  if (good === 0 && bad === 0 && neutral === 0) {
    return <p>No feedback given</p>
  }
  const total = good + neutral + bad
  const average = (good - bad) / 9.0
  const positive_percent = (good/total) * 100
  return (
    <>
    <Display text="good" count={good} />
    <Display text="neutral" count={bad} />
    <Display text="bad" count={bad} />
    <Display text="all" count={total} />
    <Display text="average" count={average} />
    <Display text="positive(%)" count={positive_percent} />
    </>
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
  
export default App
