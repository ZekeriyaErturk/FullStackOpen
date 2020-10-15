import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl);
};

const createPerson = (newPerson) => {
  return axios.post(baseUrl, newPerson);
};

const updatePerson = (updatedPerson) => {
  return axios.put(`${baseUrl}/${updatedPerson.id}`, updatedPerson);
};

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default {
  getAll,
  createPerson,
  deletePerson,
  updatePerson,
};
