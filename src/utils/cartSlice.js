import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // in older Redux ==> DON'T MUTATE THE STATE, RETURNING WAS MANDATORY
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;

            // IN RTK we have to mutate the state. "Imer" library works behind the scenes to do the newState work by itself
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, acton) => {
            state.items = [] // Mutate the state

            // Important rule: ==> Either Mutate or return the state : Never do both

            // or you can write it liek this as well if you want to use return
            // return {items: []}; this new object will replaaced originalState as => initialState: { items: [] }
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;