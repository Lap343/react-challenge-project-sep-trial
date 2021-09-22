import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth';
import editReducer from './features/edit';

const store = configureStore({
    reducer: {
        auth: authReducer,
        edit: editReducer
    },
    devTools: true
})
// const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(ReduxThunk)));

export default store;