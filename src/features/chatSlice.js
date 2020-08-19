import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  data: 'no-data',
  chatlist: [],
  converstation: [],
  loading: '',
};
const chatSlice = createSlice({
  name: 'chats',
  initialState: initialState,
  reducers: {
    loadChatList: (state, action) => {
      state.chatlist = action.payload;
    },
    loadConverstation: (state, action) => {
      
    },
  },
});

const {loadChatList, loadConversation} = chatSlice.actions;

export const fetchChats = uid => async dispatch => {
  //const res = await fetch("https://chatapp1011.herokuapp.com/showAllChat/"+uid);
  const res = await fetch("http://192.168.43.35:5000/showAllChat/"+uid);
  const data = await res.json();
  if (data.length > 0) dispatch(loadChatList(data));
};

export default chatSlice.reducer;
