import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import chatReducer from './features/chatSlice';
import userReducer from './features/userSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    chats: chatReducer,
  },
});
var count = 0;
store.subscribe(() => {
  count += 1;
  console.log(count);
});
export default store;
