import {createSlice} from '@reduxjs/toolkit';

const users = createSlice({
  name: 'users',
  initialState: {
    loading: 'idle',
    users: [],
  },
  reducers: {
    usersLoading(state, action) {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    loadUsers(state, action) {
      if (state.loading == 'pending') {
        state.loading === 'idle';
        state.users = action.payload.sort((prev, next) =>
          prev.username.localeCompare(next.username),
        );
      }
    },
  },
});

export const {loadUsers, usersLoading} = users.actions;

export const fetchUsers = () => async dispatch => {
  dispatch(usersLoading());
  const res = await fetch('https://chatapp1011.herokuapp.com/showUsers'); //hosted
 // const res = await fetch('http://192.168.43.35:5000/showUsers'); //local
  const data = await res.json();
  dispatch(loadUsers(data));
};

export default users.reducer;
