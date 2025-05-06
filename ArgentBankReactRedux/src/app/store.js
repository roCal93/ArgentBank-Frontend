import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../components/signInForm/signInFormSlice'
import authReducer from '../features/authSlice'
import userInfoReducer from '../features/userInfoSlice'
import userNameReducer from '../components/editUserForm/editUserFormSlice'

const store = configureStore({
    reducer: {
        login: loginReducer,
        auth: authReducer,
        userInfo: userInfoReducer,
        newUserName: userNameReducer
    },
});

export default store;