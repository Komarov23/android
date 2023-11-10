import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";

const Cart = () => {
    const cryptos = useSelector(state => state.cart.cryptos);

    return <View style={styles.container}>
        {cryptos.map(({ name, fullName, price, qty }) => <CartProduct key={name} name={name} fullName={fullName} price={price} qty={qty} />)}
    </View>
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        rowGap: 8,
        padding: 8
    }
})

export default Cart;
