import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/features/cart";

const CartProduct = ({ name, fullName, price, qty }) => {
    const dispatch = useDispatch();
    return <View style={styles.product}>
        <Text style={styles.product__title}>{name}</Text>
        <Text style={styles.product__name}>{fullName}</Text>
        <Text style={styles.product__name}>Quantity: {qty}</Text>
        <Text style={styles.product__price}>{price}</Text>
        <Pressable style={styles.product__button} onPress={() => dispatch(removeFromCart(name))}>
            <Text style={styles.product__text}>Remove</Text>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    product: {
        display: "flex",
        flexDirection: "column",
        rowGap: 4,
        borderRadius: 8,
        borderColor: "#D4D4D4",
        borderWidth: 1,
        padding: 8
    },
    product__title: {
        fontSize: 18,
  
    },
    product__name: {
        fontSize: 16
    },
    product__price: {
        fontSize: 18,
  
    },
    product__button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 18,
        backgroundColor: "#0E3B43",
        borderRadius: 4
    },
    product__text: {
        color: "white",
        fontSize: 16,
        lineHeight: 16,
        marginBottom: 2
    }
})

export default CartProduct;
