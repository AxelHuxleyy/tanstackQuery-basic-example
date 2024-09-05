import { useMutation } from '@tanstack/react-query';
import { editUser } from '../../services/updateUser';

export const useMutationEditUser = () => {
  return useMutation({
    mutationKey: ['editUser'],
    mutationFn: editUser,
  });
};
