import { View, Text } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { RadioButton } from "react-native-paper";

export default function YourGoals() {
  const [checked, setChecked] = useState('first');

  return (
    <View style={styles.content}>
      <Text style={styles.titleGoals}>Your Goals</Text>
      <View style={styles.container}>
        <Text style={styles.title}>Travel</Text>
        <Text style={styles.description}>Visit another country.</Text>
        <Text style={styles.moneyAmount}>Money needed: <Text style={styles.strong}>1000USD</Text></Text>
        <Text style={styles.isDoneTitle}>Is it done?</Text>
        <View style={styles.isDone}>
          <View>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
            <Text style={styles.response}>Yes</Text>
          </View>
          <View>
            <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />
            <Text style={styles.response}>No</Text>
          </View>
        </View>
      </View>
    </View>
  )
}