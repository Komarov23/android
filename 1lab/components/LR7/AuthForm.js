import React, { useState } from 'react';
import { Container, Input, Button, Text, View, VStack, Box } from 'native-base';
import { StyleSheet } from 'react-native';

const AuthForm = () => {
 const [formData, setFormData] = useState({
    username: '',
    password: '',
    showMessage: false,
    message: '',
 });

 const handleLogin = () => {
    const validLogin = {
      user1: 'user1',
      user2: 'user2',
    };

    const isValid = validLogin[formData.username] === formData.password;

    setFormData({
      ...formData,
      showMessage: true,
      message: isValid ? 'Authorization successful' : 'Authorization error',
    });
 };

 return (
    <Box style={styles.container}>
      <Box contentContainerStyle={styles.content}>
        <VStack style={styles.form}>
          <View style={styles.item}>
            <Input
              style={styles.input}
              placeholder="Username"
              onChangeText={(text) => setFormData({ ...formData, username: text })}
            />
          </View>
          <View style={styles.item}>
            <Input
              style={styles.input}
              secureTextEntry
              placeholder="Password"
              onChangeText={(text) => setFormData({ ...formData, password: text })}
            />
          </View>
          <Button full style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </Button>
        </VStack>
      </Box>
      {formData.showMessage && (
        <View style={styles.messageContainer}>
          <Text style={[styles.message, { color: formData.message.includes('successful') ? 'green' : 'red' }]}>{formData.message}</Text>
        </View>
      )}
    </Box>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    alignItems: 'center',
    justifyContent: 'center',
 },
 content: {
    paddingHorizontal: 10,
 },
 form: {
    marginVertical: 10,
    alignItems: 'center',
 },
 item: {
    marginVertical: 10,
    width: 300,
 },
 input: {
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'purple',
    borderRadius: 1,
 },
 button: {
    backgroundColor: 'purple',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
 },
 buttonText: {
    color: 'white',
    fontSize: 16,
 },
 messageContainer: {
    alignItems: 'center',
    marginTop: 10,
 },
 message: {
    fontSize: 20,
 },
});

export default AuthForm;