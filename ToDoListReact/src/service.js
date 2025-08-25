import axios from 'axios';

//axios.defaults.baseURL = process.env.REACT_API_KEY
axios.defaults.baseURL='https://todolist-1-9sc7.onrender.com';
axios.interceptors.response.use(
  response => response,
  error => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default {
  getTasks: async () => {
    console.log("before",axios.defaults.baseURL);
    const result = await axios.get(`/items`)
    return result.data;
  },

  addTask: async (name) => {
    const result = await axios.post(`/items`, { name, isComplete: false });
    return result.data;
  },

  setCompleted: async (id, updateItem) => {
    const result = await axios.put(`/item/${id}`, updateItem);
    return result.data;
  },

  deleteTask: async (id) => {
    const result = await axios.delete(`/item/${id}`, id);
    return result.data;
  }
};
