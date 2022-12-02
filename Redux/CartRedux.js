import { createSlice } from "@reduxjs/toolkit";

// const initialState =
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },

    reducers: {
        // addProduct:(state,action)=>{
        //     // state.quantity += 1;
        //     state.push(action.payload);
        //     // state.total += action.payload.product?.price * action.payload.quantity;

        // }
        addProduct: (state, action) => {
            // console.log(action.payload.product._id)
            const { _id } = action.payload.product
            // console.log(_id);
            // console.log(state.cart);
            const finds = state.cart.find(item => item.product._id === _id)
            //  console.log(finds);
            if (finds) {
                // state.cart = state.cart.map(item => item.product._id === _id ? {
                //         ...item,
                //         quantity: item.quantity + 1
                //     }
                //         : item
                // )
                state.cart = state.cart.map(item => {
                    if (item.product._id === _id) {
                        return {
                            ...item,
                            quantity: item.quantity += 1
                        }
                    }
                    else {
                        return item
                    }
                })
            } 
            

        },
        // increment(state, { payload }) {
        //     return state.map((item) =>
        //       item.id === payload
        //         ? {
        //             ...item,
        //             quantity: item.quantity + 1,
        //           }
        //         : item
        //     );
        //   },
        //   decrement(state, { payload }) {
        //     return state.map((item) =>
        //       item.id === payload
        //         ? {
        //             ...item,
        //             quantity: item.quantity - 1,
        //           }
        //         : item
        //     );
        //   },
        //   removeItem: (state, action) => {
        //     //   console.log(state);
        //     const itemId = action.payload;
        //     return state.filter((item) => item.id !== itemId);
        //   },
        //   clear(state) {
        //     return [];
        //   },
    }
})

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer
