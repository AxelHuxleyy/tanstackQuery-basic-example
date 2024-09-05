import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Box,
  CircularProgress,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { closeViewModal } from '../../../slices/viewModalSlice';
import { useQueryGetUser } from '../../../hooks/query/useQueryGetUser';
import { ErrorMessage } from '../../ErrorMesagge';

const ViewUserModal = () => {
  const viewModal = useAppSelector((x) => x.viewModal);
  const dispatch = useAppDispatch();
  const { data, isLoading, isError, error } = useQueryGetUser(viewModal?.id);
  const handleClose = () => {
    dispatch(closeViewModal());
  };

  return (
    <Dialog
      open={viewModal?.isOpen}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
    >
      <DialogContent>
        <DialogContentText>View User</DialogContentText>
        <Box sx={{ mx: 'auto', mt: 4 }}>
          {isLoading && <CircularProgress />}
          {isError && <ErrorMessage error={error} />}
          {!isLoading && !isError && (
            <div className="flex flex-col gap-8 ">
              <div className="flex flex-col gap-1">
                <p className="h-5">userName</p>
                <p className="h-1">{data?.userName}</p>
              </div>
              <div>
                <p className="h-5">Email</p>
                <p className="h-1">{data?.email}</p>
              </div>
              <div>
                <p className="h-5">Phone</p>
                <p className="h-1">{data?.phone}</p>
              </div>
              <div>
                <p className="h-5">First Name</p>
                <p className="h-1">{data?.firstName}</p>
              </div>
              <div>
                <p className="h-5">Last Name</p>
                <p className="h-1">{data?.lastName}</p>
              </div>
              <div>
                <p className="h-5">Gender</p>
                <p className="h-1">{data?.gender}</p>
              </div>
            </div>
          )}
        </Box>
      </DialogContent>

      <DialogActions className="my-2">
        {/* Botón para cerrar el Modal */}
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewUserModal;
