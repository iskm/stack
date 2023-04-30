import { useState } from 'react'

const ShowPerson = (props) => {
  const persons = props.persons
  return (
    <ol>
      {persons.map( (person) => {
        return (<li key={person.id}>{person.name}</li>)
      } )}
    </ol>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addNumber = (event) => {
    event.preventDefault()
    console.log(newName, persons)
    const newPerson = {
      name: newName,
      id: persons.length + 1,
    }
    setPersons(persons.concat(newPerson))
  }

  const handleTypedName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
    console.log(newName)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input value={newName} onChange={handleTypedName} />
        </div>
        <div>
          <button  type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ShowPerson persons={persons}/>
    </div>
  )
}

export default App
