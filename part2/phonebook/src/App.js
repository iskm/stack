import { useState } from 'react'

const ShowPerson = (props) => {
  const persons = props.persons
  return (
    <ol>
      {persons.map( (person) => {
        return (<li key={person.id}>{person.name} {person.phoneNumber}</li>)
      } )}
    </ol>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: '000-000-0000' }
  ])
  const [newName, setNewName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    console.log(newName, persons)
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else  {
      const newPerson = {
        name: newName,
        id: persons.length + 1,
        phoneNumber: phoneNumber,
      }
    setPersons(persons.concat(newPerson))
  }}

  const handleTypedName = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
    //console.log(newName)
  }

  const handlePhoneNo = (event) => {
    setPhoneNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          <p>name: <input value={newName} onChange={handleTypedName} /></p>
          <p>number: <input value={phoneNumber} onChange={handlePhoneNo} /></p>
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
