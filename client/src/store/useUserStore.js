import { create } from 'zustand';
import users from '../assets/users.json';

const useUserStore = create((set) => {
  const storedUser = JSON.parse(sessionStorage.getItem('user'));
  
  return {
    users: users,
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    newPassword: '',
    repeatPassword: '',
    currentUser: storedUser ? storedUser.id : null,
    userData: storedUser || null,
    setEmail: (email) => set({ email }),
    setFirstName: (firstName) => set({ firstName }),
    setLastName: (lastName) => set({ lastName }),
    setPassword: (password) => set({ password }),
    setNewPassword: (newPassword) => set({ newPassword }),
    setRepeatPassword: (repeatPassword) => set({ repeatPassword }),
    login: (email, password) => set((state) => {
    
      const user = state.users.find(user => user.email === email && user.password === password);
      if (user) {
        sessionStorage.setItem('user', JSON.stringify(user));
        return { currentUser: user.id, userData: user };
      } else {
        console.log("User not found or incorrect password");
        return state;
      }
    }),
    logout: () => {
      sessionStorage.removeItem('user');
      set({ currentUser: null, userData: null });
    },
    updateUserData: (data) => set((state) => ({
      userData: { ...state.userData, ...data }
    }))
  };
});

export default useUserStore;

