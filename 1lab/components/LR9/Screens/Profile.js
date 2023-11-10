import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Profile = ({ route }) => {
    const { name, phone } = route.params;
    return <View style={styles.contact}>
        <Text style={styles.contact__title}>{name}</Text>
        <Text style={styles.contact__phone}>{phone}</Text>
    </View>
}

const styles = StyleSheet.create({
    contact: {
        display: "flex",
        flexDirection: 'column',
        rowGap: 4,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#D4D4D4',
        paddingHorizontal: 16,
        paddingVertical: 8,
        margin: 16
    },
    contact__title: {
        fontSize: 24
    },
    contact__number: {
        fontSize: 20,
        color: '#D4D4D4'
    }
})

export default Profile;