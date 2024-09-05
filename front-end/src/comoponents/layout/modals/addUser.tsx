import { FC, useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { useMutationAddUser, useQueryGetAll } from '../../../hooks';
import { ErrorMessage } from '../../ErrorMesagge';

export const AddUser: FC = () => {
  const [open, setOpen] = useState(false);
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [lastName, setLastName] = useState('');
  const {
    mutate: mutateAddUser,
    status,
    isError,
    error,
    reset,
  } = useMutationAddUser();
  const isLoading = status === 'pending';
  const { refetch: refetchAllUsers } = useQueryGetAll();

  const handleClose = () => {
    setOpen(false);
    setUsername('');
    setEmail('');
    setFirstName('');
    setPhoneNumber('');
    setGender('');
    setTermsAccepted(false);
    setLastName('');
    reset();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const payload = {
      userName,
      lastName,
      email,
      firstName,
      phone,
      gender,
    };
    mutateAddUser(payload, {
      onSuccess: () => {
        refetchAllUsers();
        handleClose();
      },
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        size="large"
      >
        Add User
      </Button>

      <Dialog open={open} onClose={handleClose}>
        {isLoading && <CircularProgress />}
        {isError && <ErrorMessage error={error} />}
        {!isLoading && (
          <Box component="form" onSubmit={handleSubmit}>
            <DialogContent>
              <DialogContentText>Create a new user</DialogContentText>
              <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
                <TextField
                  label="userName"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={userName}
                  onChange={(e) => setUsername(e.target.value)}
                  required
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

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                      required
                    />
                  }
                  label="Acepto los términos y condiciones"
                />
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
                Save
              </Button>
            </DialogActions>
          </Box>
        )}
      </Dialog>
    </div>
  );
};
