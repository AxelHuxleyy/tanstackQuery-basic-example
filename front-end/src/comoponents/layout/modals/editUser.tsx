import { FC, useEffect, useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { closeEditModal } from '../../../slices';
import { useQueryGetUser } from '../../../hooks/query/useQueryGetUser';
import { useMutationEditUser } from '../../../hooks/query/useMutationEditUser';
import { useQueryGetAll } from '../../../hooks';

export const EditUser: FC = () => {
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [lastName, setLastName] = useState('');
  const editModal = useAppSelector((x) => x.editModal);
  const dispatch = useAppDispatch();
  const id = editModal?.id;
  const { data, isSuccess, refetch: refetchCurrentUser } = useQueryGetUser(id);
  const { mutate: editUser } = useMutationEditUser();
  const { refetch: refetchAllUsers } = useQueryGetAll();

  useEffect(() => {
    if (!isSuccess) return;
    setUsername(data.userName);
    setEmail(data.email);
    setFirstName(data.firstName);
    setPhoneNumber(data.phone);
    setGender(data.gender);
    setLastName(data.lastName);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const handleClose = () => {
    setUsername('');
    setEmail('');
    setFirstName('');
    setPhoneNumber('');
    setGender('');
    setLastName('');
    dispatch(closeEditModal());
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const payload = {
      _id: id!,
      userName,
      lastName,
      email,
      firstName,
      phone,
      gender,
    };
    editUser(payload, {
      onSuccess: () => {
        handleClose();
        refetchAllUsers();
        refetchCurrentUser();
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <div>
      {/* Modal */}
      <Dialog open={editModal.isOpen} onClose={handleClose}>
        <Box component="form" onSubmit={handleSubmit}>
          <DialogContent>
            <DialogContentText>Edit User</DialogContentText>
            <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
              <TextField
                label="userName"
                variant="outlined"
                fullWidth
                margin="normal"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                required
                disabled
              />

              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />

              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />

              <TextField
                label="Phone"
                variant="outlined"
                fullWidth
                margin="normal"
                value={phone}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />

              <FormControl fullWidth margin="normal">
                <InputLabel>Gender</InputLabel>
                <Select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </DialogContent>

          <DialogActions className="my-2">
            {/* Botón para cerrar el Modal */}
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="mr-2"
            >
              Edit user
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
};
