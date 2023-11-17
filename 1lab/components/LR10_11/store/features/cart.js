import { createSlice } from "@reduxjs/toolkit";
import { cryptos } from "../../constants";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cryptos: []
    },
    reducers: {
        addToCart: (state, action) => {
            const maybeCrypto = state.cryptos.find(({ name }) => name === action.payload);
            if (maybeCrypto) state.cryptos = state.cryptos.map(crypto => crypto.name === maybeCrypto.name ? { ...crypto, qty: maybeCrypto.qty + 1 } : crypto);
            else {
                const crypto = cryptos.find(({ name }) => name === action.payload);
                state.cryptos.push({ ...crypto, qty: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const maybeCrypto = state.cryptos.find(({ name }) => name === action.payload);
            if (maybeCrypto && maybeCrypto.qty > 1) state.cryptos = state.cryptos.map(crypto => crypto.name === maybeCrypto.name ? { ...crypto, qty: maybeCrypto.qty - 1 } : crypto);
            else state.cryptos = state.cryptos.filter(({ name }) => name !== action.payload);
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer