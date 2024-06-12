import {create} from 'zustand';

const useUserStore = create((set) => ({
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  newPassword: '',
  repeatPassword: '',
  setEmail: (email) => set({ email }),
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
  setPassword: (password) => set({ password }),
  setNewPassword: (newPassword) => set({ newPassword }),
  setRepeatPassword: (repeatPassword) => set({ repeatPassword }),
}));

export default useUserStore;
