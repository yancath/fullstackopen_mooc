import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({title}) => <div><h1>{title}</h1></div>

const Button = ({ text, onClick }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Survey = (props) => {
  return (
    <tr>
      <td>{props.rating} {props.count}</td>
    </tr>
  ) 
}
 
const Statistics = (props) => {
  if (props.good === 0 && props.bad === 0 && props.neutral === 0) {
    return (
      <div>
      <p>No feedback given</p>
      </div>
    )
  }

  const all = props.good + props.bad + props.neutral
  const avg = (props.good - (props.bad))/all
  const percent = (props.good/all) * 100 + "%"

  return (
    <table>
      <tbody>
        <Survey rating="good" count={props.good}/>
        <Survey rating="neutral" count={props.neutral}/>
        <Survey rating="bad" count={props.bad}/>
        <Survey rating="all" count={all}/>
        <Survey rating="average" count={avg}/>
        <Survey rating="positive" count={percent}/>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const HandleGood = () => setGood(good + 1)
  const HandleBad = () => setBad(bad + 1)
  const HandleNeutral = () => setNeutral(neutral + 1)


  return (
    <div>
      <Header title="give feedback"/>
      <Button onClick={HandleGood} text="good"/>
      <Button onClick={HandleNeutral} text="neutral"/>
      <Button onClick={HandleBad} text="bad"/>
      <Header title="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)