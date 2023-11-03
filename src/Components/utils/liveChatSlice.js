import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
  name: "liveChat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessages: (state, action) => {
         // splice method will ensure in that after 100 messages message from top will be removed
        state.messages.splice(100,1);
       
      state.messages.unshift(action.payload);
      
    },
  },
});

export const { addMessages } = liveChatSlice.actions;

export default liveChatSlice.reducer;
