import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },

    reducers: {
        addProduct: (state, action) => {
            // console.log(action.payload._id)
            const product = action.payload
            // // console.log(_id);
            // console.log(state.cart);
            const finds = state.cart.find(item => item._id === product._id)
            //  console.log(finds);
            if (finds) {
                state.cart = state.cart.map((item) => {
                    if (item._id === product._id) {
                        console.log('exist: ')
                        return {
                            ...item,
                            quantity: item.quantity += 1
                        }
                    } else {
                        return item
                    }
                })
            } else {
                state.cart = [
                    ...state.cart,
                    {
                        ...product,
                        quantity: 1
                    }
                ]
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
