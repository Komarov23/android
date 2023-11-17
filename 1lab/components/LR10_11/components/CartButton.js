import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const CartButton = ({ onPress }) => {
    const count = useSelector(state => state.cart.cryptos.length)
    return <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Cart {count}</Text>
    </Pressable>
}

const styles = StyleSheet.create({
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 18,
        backgroundColor: "#0E3B43",
        borderRadius: 4
    },
    text: {
        color: "white",
        fontSize: 16,
        lineHeight: 16,
        marginBottom: 2
    }
});

export default CartButton;
