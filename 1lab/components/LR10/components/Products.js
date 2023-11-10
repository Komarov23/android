import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { cryptos } from "../constants";
import Product from "./Product";


const Products = () => {
    return <View style={styles.container}>
        <ScrollView>
            <View style={styles.products}>
                {cryptos.map(crypto => 
                    <Product 
                        key={crypto.name} 
                        name={crypto.name} 
                        fullName={crypto.fullName} 
                        price={crypto.price} 
                    />
                    )
                }
            </View>
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
    },
    products: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        rowGap: 8
    },
})

export default Products;
