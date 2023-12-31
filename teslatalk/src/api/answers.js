import axios from "axios";

export const getAnswer = async (id) => {
    const response = await axios.get(`http://localhost:3000/answers/${id}`);
    return response.data;
  };

export const createAnswer = async (answer, id) => {
  const response = await axios.post(`http://localhost:3000/topics/${id}/answers/`, answer);
  return response.data;
};

export const updateAnswer = async (answer) => {
  const response = await axios.put(
    `http://localhost:3000/answers/${answer._id}`,
    answer
  );
  return response.data;
};

export const deleteAnswer = async (id) => {
  const response = await axios.delete(`http://localhost:3000/answers/${id}`);
  return response.data;
};
