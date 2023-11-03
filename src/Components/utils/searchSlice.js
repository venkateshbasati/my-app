import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"searchWords",
    initialState:{

    },
    reducers:{
        cacheSearchResults:(state, action)=>{
            return {...state,...action.payload};
            /**
             * or state=Object.assign(state, action.payload)
             */
        }
    }
})
export const {cacheSearchResults}=searchSlice.actions;

export default searchSlice.reducer;