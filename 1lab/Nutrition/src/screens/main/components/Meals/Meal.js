import { Box } from "native-base";
import { Text, StyleSheet } from "react-native";

const Meal = ({ name, kk, description }) => {
  return <Box style={styles.container}>
    <Box style={styles.header}>
      <Text style={styles.name}>{name}</Text>
      <Box style={styles.kk}>
        <Text style={styles.kk_text}>{parseFloat(kk.toFixed(2))}</Text>
      </Box>
    </Box>
    <Text style={styles.description}>{description}</Text>
  </Box>
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    borderColor: "#36454F",
    borderWidth: 1,
    padding: 8,
    borderRadius: 8
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  name: {
    fontSize: 18,
    marginLeft: 8
  },
  kk: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: "#36454F",
  },
  kk_text: {
    fontSize: 16,
    color: "white"
  },
  description: {
    fontSize: 16,
    paddingLeft: 8
  }
})

export default Meal
