import { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: '000-000-0000', id: 1 },
    { name: 'John F Kennedy', phoneNumber: '1-800-NASA', id: 2 },
    { name: 'Julius K Nyerere', phoneNumber: '1-800-UHURU', id: 3 },
  ])
  const [newName, setNewName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const ShowPerson = () => {
      if (searchTerm === undefined)  {
        return persons.map( (person) => {
          return (<li key={person.id}>{person.name} {person.phoneNumber}</li>)})
      } else {
          const searchedList = persons.filter( (person) =>
            {return person.name.includes(searchTerm)});
          console.log(searchedList)
          return searchedList.map( (searched) => {
            return (<li key={searched.id}>{searched.name} {searched.phoneNumber}</li>)
          } )
      }
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <p>filter shown with <input value={searchTerm} onChange={handleSearch} /></p>
      <h2> add new contact </h2>
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
      <ShowPerson/>
    </div>
  )
}

export default App
