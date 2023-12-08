import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import Products from "../components/Products";

const Cryptos = ({ navigation }) => {
    const openCart = () => navigation.navigate('Cart')
    return (
        <View style={styles.container}>
            <Header onPress={openCart} />
            <Products />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        height: "100%",
        padding: 8,
        flex: 1
    }
})

export default Cryptos;
