import { useState } from "react";
import { View } from "react-native";
import { Button as PaperButton } from 'react-native-paper';

export default function EconomiesButtons() {
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View style={{
      flexDirection: 'row',
      gap: 16,
      marginTop: 16
    }}>
      <PaperButton onPress={() => alert("Hold on! Work is in progress yet!")} icon="piggy-bank" mode="contained" buttonColor='#52ad52' textColor='#fff'>Savings</PaperButton>
      <PaperButton onPress={() => alert("Hold on! Work is in progress yet!")} icon="currency-usd-off" mode="contained" buttonColor='#da563f' textColor='#fff'>Withdraws</PaperButton>
    </View>
  )
}