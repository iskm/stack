/* eslint-disable */ 
import { useEffect, useState } from 'react'
import personService from './services/persons'

const ShowPerson = (props) => {
  const searchTerm = props.searchTerm
  const persons = props.persons
  const setPersons = props.setPersons

  const removePerson = (id) => {
    return () => {
      if (confirm(`Are you sure you want to delete this contact? `)) {
          personService
              .remove(id)
              .then(response => console.log(response.data))
            setPersons(personService.getAll())

      }
     }
  }

  if (searchTerm === undefined) {
    return persons.map((person) => {
      return (<li key={person.id}>{person.name} {person.number}
        <button onClick={removePerson(person.id)} >delete</button></li>)
    })
  } else {
      if (persons === undefined) {
        return (<p> Nothing found </p>)
      }
      const searchedList = persons.filter((person) =>
        { return person.name.includes(props.searchTerm)
      });

      console.log(searchedList)
      return searchedList.map( (searched) => {
        return (<li key={searched.id}>{searched.name} {searched.number}
          <button onClick={removePerson(searched.id)} >delete</button></li>)
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

// create component to display error messages
const Notification = ({message}) => {
  if (message === null)
    return null

  return (
    <div className='error'>
      {message}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [number, setPhoneNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [errorMessage, setErrorMessage] = useState(`error error error`)

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
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
        number: number
      }
      // store new person locally and on the local server
      setErrorMessage(`Added ${newName}`)
      setTimeout(() => setErrorMessage('All good'), 5000)
      personService
        .create(newPerson)
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
      <Notification message={errorMessage} />
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
        searchTerm={searchTerm} persons={persons} setPersons={setPersons}
      />
    </div>
  )
}

export default App
