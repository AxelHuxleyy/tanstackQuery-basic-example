import { useMutation } from '@tanstack/react-query';
import { addUser } from '../../services/addUser';

export const useMutationAddUser = () => {
  return useMutation({
    mutationKey: ['AddUser'],
    mutationFn: addUser,
  });
};
