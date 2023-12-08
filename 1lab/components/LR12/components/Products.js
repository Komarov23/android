import React, {useState} from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Product from "./Product";
import Crypto from "../services/Crypto";

const Products = () => {
    const [cryptos, setCryptos] = useState([]);
    Crypto.getCryptos(setCryptos);
    return <View style={styles.container}>
        <ScrollView>
            <View style={styles.products}>
                {cryptos.map(crypto => 
                    <Product 
                        key={crypto.id}
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
