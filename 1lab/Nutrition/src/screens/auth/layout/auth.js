import { StyleSheet } from "react-native";
import { Button, Center, Icon, ScrollView } from "native-base";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const AuthLayout = ({ children, isLogin, onSubmit, onRedirect, isLoading }) => {
  const leftButton = isLogin ? 'Login' : 'Register';
  const rightButton = isLogin ? 'Doesn\'t have an account?' : 'Already have an account?';

  return <ScrollView style={styles.scrollContainer}>
    <Center style={styles.container}>
      {children}
      <Button.Group style={styles.buttons} isAttached>
        <Button
          isLoading={isLoading}
          leftIcon={<Icon as={<AntDesign name='login' size={24}/>} />}
          onPress={onSubmit}
        >
          {leftButton}
        </Button>
        <Button
          isDisabled={isLoading}
          variant="outline"
          onPress={onRedirect}
        >
          {rightButton}
        </Button>
      </Button.Group>
    </Center>
  </ScrollView>
}

const styles = StyleSheet.create({
  scrollContainer: {
    marginTop: 48
  },
  container: {
    display: "flex",
    flexDirection: "column",
    rowGap: 8
  },
  buttons: {
    marginTop: 16
  }
})

export default AuthLayout;
