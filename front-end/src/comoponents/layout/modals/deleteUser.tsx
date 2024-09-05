import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { closeDeleteModal } from '../../../slices';
import { useMutationDeleteUser } from '../../../hooks/query/useMutationDeleteUser';
import { useEffect } from 'react';

export const DeleteUser = () => {
  const deleteModal = useAppSelector((x) => x.deleteModal);
  const dispatch = useAppDispatch();
  const { mutate, isSuccess } = useMutationDeleteUser();
  const handleClose = () => {
    dispatch(closeDeleteModal());
  };

  useEffect(() => {
    if (!isSuccess) return;
    handleClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const handleDelete = () => {
    mutate(deleteModal?.id);
  };
  return (
    <Dialog
      open={deleteModal.isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {'Are you sure you want to delete this user?'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This action is irreversible and all associated data will be
          permanently lost.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Disagree
        </Button>
        <Button
          variant="contained"
          color="error"
          className="mr-2"
          onClick={handleDelete}
        >
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};
