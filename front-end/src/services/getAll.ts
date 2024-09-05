import axios from 'axios';
import { User } from '../types/User';

export const getAllUsers = async (): Promise<
  Pick<User, 'userName' | 'email' | 'firstName' | 'phone' | '_id'>
> => {
  try {
    const response = await axios('http://localhost:3000/api/getAll');
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Error fetching data');
  }
};
