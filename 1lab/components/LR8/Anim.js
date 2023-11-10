import React, { useRef, useEffect } from "react";
import { Animated, StyleSheet, Text } from "react-native";

const Hello = ({ callback, duration = 4000 }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start(() => callback());
  }, [fadeAnim]);

  return(
    <Animated.View
        style={{...styles.container, opacity: fadeAnim}}
    >
        <Text style={styles.text}>Hello</Text>
        <Text style={styles.description}>Лабораторно робота номер 8</Text>
    </Animated.View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 36
    },
    description: {
      fontSize: 16,
      color: "#D4D4D4"
    }
})

export default Hello