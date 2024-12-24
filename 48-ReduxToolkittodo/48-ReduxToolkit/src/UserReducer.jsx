import { createSlice } from "@reduxjs/toolkit";

const userList = [];
const userSlice = createSlice({
    name: 'user',
    initialState: userList,
    reducers:{
        addUser: (state, action) => {
         state.push(action.payload)
        },

        updateUser: (state, action) => {
         const {id, name, email} = action.payload;
         const uu = state.find(user => user.id === id);
         if(uu){
            uu.name = name;
            uu.email = email;  
       }
    },
    deleteUser: (state, action) => {
        const {id} = action.payload;
        const uu = state.find(user => user.id === id);
        if(uu){
           return state.filter(user => user.id !== id);
        }
    },

alldelete: () => {
    return[];
}
}
});

export const {addUser, updateUser, deleteUser, alldelete} = userSlice.actions;
export default userSlice.reducer;

