import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = (person) => {
  return axios.post(baseUrl, person)
}

const update = (id, changedPerson) => {
  return axios.put(`${baseUrl}/${id}`, changedPerson)
}

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, update, remove }
