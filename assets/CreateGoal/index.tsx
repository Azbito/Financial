import { View, Text } from "react-native";
import { styles } from "./styles";
import { Button, Modal, RadioButton } from "react-native-paper";

type CreateGoalProps = {
  onPressButton: () => void
}

export default function CreateGoal({ onPressButton }: CreateGoalProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a goal!</Text>
      <Button mode="contained" onPress={onPressButton}>Add</Button>
    </View>
  )
}