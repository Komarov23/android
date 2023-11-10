import React from "react";
import { StyleSheet, View, Text, ScrollView, SafeAreaView, Button } from "react-native";

const contacts = [
    {
        name: 'Name1 Surname1',
        phone: '+380661111111'
    },
    {
        name: 'Name2 Surname2',
        phone: '+380662111111'
    },
    {
        name: 'Name3 Surname3',
        phone: '+380663111111'
    },
    {
        name: 'Name4 Surname4',
        phone: '+380664111111'
    },
    {
        name: 'Name5 Surname5',
        phone: '+380665111111'
    },
    {
        name: 'Name6 Surname6',
        phone: '+380661611111'
    },
    {
        name: 'Name7 Surname7',
        phone: '+380667111111'
    },
    {
        name: 'Name8 Surname8',
        phone: '+380668111111'
    },
    {
        name: 'Name9 Surname9',
        phone: '+380669111111'
    },
    {
        name: 'Name10 Surname10',
        phone: '+380661011111'
    },
    {
        name: 'Name11 Surname11',
        phone: '+380660111111'
    },
    {
        name: 'Name12 Surname12',
        phone: '+380661211111'
    }
]

const Contact = ({ name, phone, openProfile }) =>  {
    return <View style={styles.contact}>
        <Text style={styles.contact__title}>{name}</Text>
        <Text style={styles.contact__phone}>{phone}</Text>
        <Button title={'Show'} onPress={openProfile}></Button>
    </View>
}


const Contacts = ({ navigation }) => {
    const gotoProfile = (name, phone) => navigation.navigate('Profile', { name, phone })
    return (
        <ScrollView>
            <View style={styles.container}>
                {contacts.map(({ name, phone }) => <Contact name={name} phone={phone} openProfile={() => gotoProfile(name, phone)} />)}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'column',
        rowGap: 16,
        padding: 16
    },
    contact: {
        display: "flex",
        flexDirection: 'column',
        rowGap: 4,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#D4D4D4',
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    contact__title: {
        fontSize: 20
    },
    contact__number: {
        fontSize: 16,
        color: '#D4D4D4'
    }
})

export default Contacts;