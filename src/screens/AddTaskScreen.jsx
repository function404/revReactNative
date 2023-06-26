import { View } from "react-native";
import { Text } from "react-native-paper";
import styles from "../utils/style";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Task Screen</Text>
    </View>
  );
}