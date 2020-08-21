import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: 'no-data',
  chatlist: [],
  conversation: [],
  loading: 'idle',
  loaderC:'idle',
  
};
const chatSlice = createSlice({
  name: 'chats',
  initialState: initialState,
  reducers: {
    chatloading(state,action){
      if(state.loading=='idle'){
        state.loading='pending'
      }
    },
    loadChatList: (state, action) => {
      if(state.loading=='pending'){
      state.chatlist = action.payload.filter(x=>x!==null)
      state.loading='idle'
      }
    },
  
    loadConversation: (state, action) => {
      const chat = state.chatlist.find(res => res.participants.toString() == [action.payload.p1, action.payload.p2].sort().toString())
      state.conversation = chat.conversation.slice(chat.conversation.length-action.payload.n) ?? []
      state.loaderC='pending'
    },
    addMessageToConversation: (state, action) => {
      state.conversation.push(action.payload)
    },
    changingLoaderC(state,action){
      state.loaderC='idle'
    }
  },
});

export const {changingLoaderC,chatloading, loadChatList, loadConversation, addMessageToConversation } = chatSlice.actions;

export const fetchChats = (uid,p=null) => async dispatch => {
  // const res = await fetch("https://chatapp1011.herokuapp.com/showAllChat/"+uid);
  dispatch(chatloading())
  const res = await fetch("http://192.168.43.35:5000/showAllChat/" + uid);
  const data = await res.json();
  if (data.length > 0) {
    dispatch(loadChatList(data));
  }
  if(p){
    dispatch(chatloading())
    dispatch(loadConversation({p1:uid,p2:p,n:10}))
  }
};
export const updateChats = (sender, message, receiver) => async dispatch => {
  await fetch('http://192.168.43.35:5000/updateChatList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sender: sender,
      message: message,
      receiver: receiver,
    }),
  }).then(res => console.log('successfully added'));
  await dispatch(fetchChats(sender,receiver))
}


export default chatSlice.reducer;
