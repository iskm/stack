/* eslint no-use-before-define: 0 */ // --> OFF
import { useEffect, useState } from 'react'
import axios from 'axios'

const ShowPerson = (props) => {
  const searchTerm = props.searchTerm
  const persons = props.persons
  if (searchTerm === undefined) {
    return persons.map((person) => {
      return (<li key={person.id}>{person.name} {person.number}</li>)
    })
  } else {
    const searchedList = persons.filter((person) =>
    { return person.name.includes(props.searchTerm)
    });
      console.log(searchedList)
      return searchedList.map( (searched) => {
        return (<li key={searched.id}>{searched.name} {searched.number}</li>)
    })
  }
}

const Filter = (props) => {
  return (
    <p>filter shown with <input
      value={props.searchTerm} onChange={(event) =>
        props.setSearchTerm(event.target.value)}
                         />
    </p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [number, setPhoneNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const baseURL = 'http://localhost:3001/persons'

  useEffect(() => {
    axios
      .get(baseURL)
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
        console.log(persons)
      })
  })

  const addContact = (event) => {
    event.preventDefault()
    console.log(newName, persons)
    if (persons.find(person => person.name === newName)) { // eslint-disable-next-line
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = {
        name: newName,
        id: persons.length + 1, // eslint-disable-next-line
        number: number
      }
      // store new person locally and on the local server
      axios
        .post(baseURL, newPerson)
        .then(response =>
          console.log(response))
      setPersons(persons.concat(newPerson))
    }
  }

  const handleTypedName = (event) => {
    //  console.log(event.target.value)
    setNewName(event.target.value)
    //  console.log(newName)
  }

  const handlePhoneNo = (event) => {
    setPhoneNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h2> add new contact </h2>
      <form onSubmit={addContact}>
        <div>
          <p>name: <input value={newName} onChange={handleTypedName} /></p>
          <p>number: <input value={number} onChange={handlePhoneNo} /></p>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ShowPerson
        searchTerm={searchTerm} persons={persons}
      />
    </div>
  )
}

export default App
