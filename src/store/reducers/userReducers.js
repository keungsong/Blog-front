import { createSlice } from "@reduxjs/toolkit";

const userInitialState = {userInfo: null};

const userSlice  = createSlice({
    name:"user",
    initialState: userInitialState,
    reducers:{
        setUserInfo(state, action){
            state.userInfo = action.payload;
        },
        resetUserInfo(state, action){
            state.userInfo = null;
        }
    }
});


const userReducer = userSlice.reducer;

const userActions = userSlice.actions; 

export {userActions, userReducer};