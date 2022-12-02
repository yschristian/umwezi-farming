import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const cartSlice = createSlice({
    name: "cart",
    initialState,
    // products:[],
    // quantity:0,
    // total:0
    reducers: {
        // addProduct:(state,action)=>{
        //     // state.quantity += 1;
        //     state.push(action.payload);
        //     // state.total += action.payload.product?.price * action.payload.quantity;

        // }
        addProduct: (state, { payload }) => {
            const { id } = payload
            console.log(id);
            const find = state.find(item => item.id === id)
            if (find) {
                return state.map(
                    item => item.id === id ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                        : item
                )
            } else {
                state.push({
                    ...payload,
                    quantity: 1,
                })
            }

        },
        increment(state, { payload }) {
            return state.map((item) =>
              item.id === payload
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item
            );
          },
          decrement(state, { payload }) {
            return state.map((item) =>
              item.id === payload
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item
            );
          },
          removeItem: (state, action) => {
            //   console.log(state);
            const itemId = action.payload;
            return state.filter((item) => item.id !== itemId);
          },
          clear(state) {
            return [];
          },
    }
})

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer
