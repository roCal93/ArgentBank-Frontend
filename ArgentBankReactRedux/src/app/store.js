import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../components/signInForm/signInFormSlice'
import authReducer from '../features/authSlice'
import userInfoReducer from '../features/userInfoSlice'
import userNameReducer from '../components/editUserForm/editUserFormSlice'

const store = configureStore({
    reducer: {// Object defining the available reducers in the store.
        login: loginReducer, // Manages login state.
        auth: authReducer, // Manages authentication state.
        userInfo: userInfoReducer, // Manages user information.
        newUserName: userNameReducer // Manages the state of the new username.
    },
});

export default store;