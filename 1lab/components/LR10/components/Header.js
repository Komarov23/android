import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CartButton from "./CartButton";

const Header = ({ onPress }) => {
    return <View style={styles.container}>
        <Text style={styles.logo}>CryptoSeller</Text>
        <CartButton onPress={onPress} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#E5E4E2",
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 8
    },
    logo: {

        fontSize: 20,
        marginLeft: 8
    }
})

export default Header;
