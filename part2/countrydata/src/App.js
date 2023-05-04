import axios from 'axios'
import {useEffect, useState} from 'react'

const Notification = (props) => {
   const namesOfCountries = props.countries.map(country => {
     return <li>{country.name.official}</li>
            })

  if (props.countries.length <= 10 && props.countries.length > 1) {
      return (
       <pre>
         <ul>
          {namesOfCountries}
         </ul>
        </pre>
        )

  } else if (props.countries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else if (props.countries.length === 1) {
      // retrieve object pertaining to country
      const country = props.countries[0]
      console.log(props.countries[0])

     // extract languages from 
    let languages = []
     for (let value in country.languages) {
       languages = languages.concat(<li>{country.languages[value]}</li>)
    }
      return (
        <div>
          <h1>{country.name.official}</h1>
          <p>capital {country.capital}</p>
          <p>area {country.area}</p>
          <h3> languages: </h3>
           <ul>
             {languages}
           </ul>
          <img src={country.flags.png} alt={country.flags.alt} />
        </div>
      )
  }
  }

const App = () => {

  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState([])

  const handleChange = (event) => {
    console.log(event.target.value)
    setCountry(event.target.value)
  }

  useEffect( () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        if(country) {
          const filtered = response.data.filter(value => 
            value.name.official
              .includes(country))
          setCountries(filtered)
          console.log(countries, countries.length)

        }
      })
      //.catch(response => {
        //return null
      //})

  }, [country, countries]
  )

  return (
    <div>
        find countries <input value={country} onChange={handleChange} />
      <Notification countries={countries} />
  </div>
      )
}

export default App;
