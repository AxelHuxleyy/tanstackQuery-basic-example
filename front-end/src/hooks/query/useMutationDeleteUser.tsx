import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUserService } from '../../services/deleteUser';

export const useMutationDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['deleteUser'],
    mutationFn: deleteUserService,
    onSuccess: (_, variables) => {
      // Updating manually the cache
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      queryClient.setQueryData(['allUsers'], (oldData: any[]) => {
        return oldData.filter((user) => user._id !== variables);
      });
    },
  });
};
