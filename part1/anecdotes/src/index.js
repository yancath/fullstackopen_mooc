import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({title}) => <div><h1>{title}</h1></div>

const Button = ( {text, onClick} ) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0])
  const [index, setIndex] = useState(0)

  const len = anecdotes.length

  const SelectAnecdote = () => setSelected(Math.floor(Math.random() * len))
  const AddVote = () => {
    const updatedVotes = [...votes]
    const max =  Math.max( ...updatedVotes);
    const index= updatedVotes.indexOf(max);

    updatedVotes[selected]++

    setVotes(updatedVotes)
    if (max > 0) {
      setIndex(index)
    }
  }

  return (
    <div>
      <Header title="Anecdote of the day"/>
      {props.anecdotes[selected]}
      <br></br>
      has {votes[selected]} votes
      <br></br>
      <Button onClick={AddVote} text="vote"/>
      <Button onClick={SelectAnecdote} text="next anecdote"/>
      <Header title="Anecdote with the most votes"/>
      {anecdotes[index]} has 
      <br></br>
      {votes[index]} votes
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software pr oject makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)