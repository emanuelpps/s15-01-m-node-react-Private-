import { create } from 'zustand';
import users from '../../public/assets/users.json';

const useUserStore = create((set) => {
  const storedUser = JSON.parse(localStorage.getItem('user'));

  console.log("Stored User:", storedUser);
  
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
      console.log("Attempting login with email:", email, "and password:", password);
    
      const user = state.users.find(user => user.email === email && user.password === password);
      if (user) {
        console.log("User found:", user);
        localStorage.setItem('user', JSON.stringify(user));
        return { currentUser: user.id, userData: user };
      } else {
        console.log("User not found or incorrect password");
        return state;
      }
    }),
    logout: () => {
      localStorage.removeItem('user');
      set({ currentUser: null, userData: null });
    },
    updateUserData: (data) => set((state) => ({
      userData: { ...state.userData, ...data }
    }))
  };
});

export default useUserStore;
