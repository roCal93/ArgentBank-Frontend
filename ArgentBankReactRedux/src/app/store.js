import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../components/signInForm/signInFormSlice'
import authReducer from '../features/authSlice'
import userInfoReducer from '../features/userInfoSlice'

const store = configureStore({
    reducer: {
        login: loginReducer,
        auth: authReducer,
        userInfo: userInfoReducer
    },
});

export default store;