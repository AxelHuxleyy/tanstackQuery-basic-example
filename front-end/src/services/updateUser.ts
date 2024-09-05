import axios from 'axios';
import { User } from '../types/User';

export const editUser = async (payload: User) => {
  try {
    const { _id, ...restPayload } = payload;
    const response = await axios.put(
      `http://localhost:3000/api/update/${_id}`,
      {
        ...restPayload,
      },
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
