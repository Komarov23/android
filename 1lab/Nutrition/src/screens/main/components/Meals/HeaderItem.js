import { Pressable } from "native-base";
import { Text, StyleSheet } from "react-native";

const HeaderItem = ({ date, isSelected, onSelect }) => <Pressable
  style={isSelected ? styles.buttonSelected : styles.button}
  onPress={() => onSelect()}
>
  <Text
    style={isSelected ? styles.textSelected : styles.text}
  >
    {date}
  </Text>
</Pressable>

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#36454F"
  },
  buttonSelected: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    backgroundColor: "#36454F"
  },
  text: {
    fontSize: 16,
    color: "#36454F"
  },
  textSelected: {
    fontSize: 16,
    color: "white"
  }
});

export default HeaderItem;
