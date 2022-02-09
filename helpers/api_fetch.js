import axios from "axios";
const api_base_url = "https://portfolio150.herokuapp.com/api";

export const getAllProjects = async () => {
  const response = await axios.get(`${api_base_url}/projects?populate=*`);
  const data = await response.data;
  return data;
};
